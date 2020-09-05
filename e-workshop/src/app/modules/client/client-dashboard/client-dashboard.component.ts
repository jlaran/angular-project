import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Client } from './../../../shared/models/client.model';
import { AuthenticationService } from '../../../core/services/authentication/authentication.service';
import { Subscription } from 'rxjs';
import { DataService } from '../../../core/data-service/data.service';
import { ClientServiceService } from '../../../core/data-service/clients/client-service.service';
import { LocalStorageService } from '../../../core/services/local-storage/local-storage.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'e-workshop-client-dashboard',
  templateUrl: './client-dashboard.component.html',
  styleUrls: ['./client-dashboard.component.scss']
})
export class ClientDashboardComponent implements OnInit, OnDestroy, AfterViewInit {
  public clientData: Client;

  subscription: Subscription;

  constructor(
    private readonly authenticationService: AuthenticationService,
    private dataservice: DataService,
    private local: LocalStorageService,
    private client: ClientServiceService
  ) { }

  ngOnInit(): void {
    // this.clientData = this.authenticationService.getLoggedUser();
    this.subscription = this.dataservice.data.subscribe((data: any) => {
      if (typeof this.clientData != "undefined") {
        this.clientData = data
      }
    })


    this.subscription = this.client.getClientAllInfo(this.local.get("authData", "id").id).subscribe((data: any) => {
      this.clientData = data
    })


  }

  ngAfterViewInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  // public getClientId(): any {
  //   return this.authenticationService.getLoggedUser();
  // }
}
