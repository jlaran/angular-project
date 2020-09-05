import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Client } from 'src/app/shared/models/client.model';
import { ClientServiceService } from 'src/app/core/data-service/clients/client-service.service';
import { AuthenticationService } from 'src/app/core/services/authentication/authentication.service';
import { NewCarModalComponent } from '../new-car-modal/new-car-modal.component';
import { LocalStorageService } from 'src/app/core/services/local-storage/local-storage.service';

@Component({
  selector: 'e-workshop-client-header',
  templateUrl: './client-header.component.html',
  styleUrls: ['./client-header.component.scss']
})
export class ClientHeaderComponent implements OnInit {
  public clientData: Client;
  private subscription: Subscription;
  private id = this.local.get('authData').id;

  constructor(
    private readonly clientService: ClientServiceService,
    private readonly modalService: NgbModal,
    private readonly authenticationService: AuthenticationService,
    private local: LocalStorageService,
    private client: ClientServiceService
  ) { }

  ngOnInit(): void {
    this.subscription = this.client.getClientAllInfo(this.id).subscribe((data: any) => {
      this.clientData = data;
    });
  }

  public onNewCarModal(): void {
    const modalRef = this.modalService.open(NewCarModalComponent, {
      size: 'md',
      centered: true,
    });

    modalRef.componentInstance.carCreated.subscribe(() => {
      this.getClient();
    });
  }

  private getClient(): void {

  }

  public logOut(): void {
    this.authenticationService.logout();
  }

}
