import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Client } from './../../../shared/models/client.model';
import { AuthenticationService } from '../../../core/services/authentication/authentication.service';
import { Subscription } from 'rxjs';
import { DataService } from '../../../core/data-service/data.service';
import { ClientServiceService } from '../../../core/data-service/clients/client-service.service';
import { LocalStorageService } from '../../../core/services/local-storage/local-storage.service';

@Component({
  selector: 'e-workshop-client-dashboard',
  templateUrl: './client-dashboard.component.html',
  styleUrls: ['./client-dashboard.component.scss']
})
export class ClientDashboardComponent implements OnInit, OnDestroy {
  public clientData: Client;
  private id = this.local.get('authData').id;
  private subscription: Subscription;

  constructor(
    private readonly authenticationService: AuthenticationService,
    private dataservice: DataService,
    private local: LocalStorageService,
    private client: ClientServiceService
  ) { }

  ngOnInit(): void {
    this.subscription = this.dataservice.data.subscribe((data: any) => {
      if (typeof this.clientData !== 'undefined') {
        this.clientData = data;
      }
    });

    this.subscription = this.client.getClientAllInfo(this.id).subscribe((data: any) => {
      this.clientData = data;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  // public getClientId(): any {
  //   return this.authenticationService.getLoggedUser();
  // }
}
