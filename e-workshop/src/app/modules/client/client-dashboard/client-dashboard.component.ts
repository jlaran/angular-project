import { Component, OnInit } from '@angular/core';
import { Client } from './../../../shared/models/client.model';
import { AuthenticationService } from 'src/app/core/services/authentication/authentication.service';

@Component({
  selector: 'e-workshop-client-dashboard',
  templateUrl: './client-dashboard.component.html',
  styleUrls: ['./client-dashboard.component.scss']
})
export class ClientDashboardComponent implements OnInit {
  public clientData: Client;

  constructor(
    private readonly authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.clientData = this.authenticationService.getLoggedUser();
    // console.log(this.clientData);
  }



  // public getClientId(): any {
  //   return this.authenticationService.getLoggedUser();
  // }
}
