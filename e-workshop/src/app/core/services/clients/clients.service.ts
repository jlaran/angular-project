import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { EventsHubService } from '../events-hub/events-hub.service';
import { ClientServiceService } from '../../data-service/clients/client-service.service';
import { AuthService } from '../../data-service/auth/auth.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { DataService } from '../../data-service/data.service';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private token: string;
  private loggedUser;

  constructor(
    private readonly authService: AuthService,
    private readonly clientService: ClientServiceService,
    private readonly eventsHubService: EventsHubService,
    private readonly localStorageService: LocalStorageService,
    private readonly toastrService: ToastrService,
    private router: Router,
    private dataservice: DataService
  ) {
    const authData = this.localStorageService.get('authData', null);
    if (authData) {
      this.token = authData.token;
      this.loggedUser = authData.id;
      this.eventsHubService.setLoggedIn(true);
    }
  }

  public addCar(car): Promise<any> {
    return new Promise((resolve, reject) => {
      this.clientService.addCarToClient(this.loggedUser, car).subscribe(
        (result) => {
          this.clientService.getClientAllInfo(this.loggedUser).subscribe(
            (clientResult) => {
              // console.log(clientResult);
              this.dataservice.setData(clientResult)
              // this.localStorageService.set('authData', {
              //   token: this.token,
              //   id: clientResult.id
              // });
              resolve(result);
            },
            () => {
              reject({ message: 'user does not exists' });
            }
          );
        },
        (error) => {
          reject(error);
        }
      );
    });
  }
}
