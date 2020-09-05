import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Client } from 'src/app/shared/models/client.model';
import { ClientServiceService } from 'src/app/core/data-service/clients/client-service.service';
import { AuthenticationService } from 'src/app/core/services/authentication/authentication.service';
import { NewCarModalComponent } from '../new-car-modal/new-car-modal.component';

@Component({
  selector: 'e-workshop-client-header',
  templateUrl: './client-header.component.html',
  styleUrls: ['./client-header.component.scss']
})
export class ClientHeaderComponent implements OnInit {
  public clientData: Client;

  constructor(
    private readonly clientService: ClientServiceService,
    private readonly modalService: NgbModal,
    private readonly authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.clientData = this.authenticationService.getLoggedUser();
    this.getClient();
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
    // this.clientService.getClientAllInfo(this.clientData.id).subscribe(
    //   (result) => {
    //     this.clientData = result;
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
  }

  public logOut(): void {
    this.authenticationService.logout();
  }

}
