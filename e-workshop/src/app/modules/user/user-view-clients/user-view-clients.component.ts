import { AuthenticationService } from 'src/app/core/services/authentication/authentication.service';
import { ToastrService } from 'ngx-toastr';
import { UsersServiceService } from './../../../core/data-service/users/users-service.service';
import { ClientServiceService } from 'src/app/core/data-service/clients/client-service.service';
import { DataService } from './../../../core/data-service/data.service';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/shared/models/client.model';

@Component({
  selector: 'e-workshop-user-view-clients',
  templateUrl: './user-view-clients.component.html',
  styleUrls: ['./user-view-clients.component.scss']
})
export class UserViewClientsComponent implements OnInit {
  private subscription: Subscription;
  public clientData: Client;

  constructor(
    private dataservice: DataService,
    private userDataService: UsersServiceService,
    private toastrService: ToastrService,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.subscription = this.userDataService.getClients().subscribe(
      (result) => {
        this.clientData = result;
        console.log(result);
      },
      (error) => {
        this.toastrService.error('Something went wrong');
      }
    );
  }

  onNewClientModal(): void {

  }

  public logOut(): void {
    this.authenticationService.logout();
  }

}
