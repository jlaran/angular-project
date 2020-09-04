import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { EventsHubService } from '../events-hub/events-hub.service';
import { ClientServiceService } from '../../data-service/clients/client-service.service';
import { AuthService } from '../../data-service/auth/auth.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';

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
    private router: Router
  ) {
    const authData = this.localStorageService.get('authData', null);
    if (authData) {
      this.token = authData.token;
      this.loggedUser = authData.loggedUser;
      this.eventsHubService.setLoggedIn(true);
    }
  }

  public addCar(car): Promise<any> {
    return new Promise((resolve, reject) => {
      this.clientService.addCarToClient(this.loggedUser._id, car).subscribe(
        (result) => {
          this.clientService.getClientAllInfo(this.loggedUser._id).subscribe(
            (clientResult) => {
              console.log(clientResult);
              this.localStorageService.set('authData', {
                token: this.token,
                loggedUser: clientResult
              });
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
