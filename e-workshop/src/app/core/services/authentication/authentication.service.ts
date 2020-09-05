import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from './../local-storage/local-storage.service';
import { EventsHubService } from './../events-hub/events-hub.service';
import { ClientServiceService } from './../../data-service/clients/client-service.service';
import { AuthService } from './../../data-service/auth/auth.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { DataService } from '../../data-service/data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
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
    if (!authData.admin) {
      console.log(authData);
      this.token = authData.token;
      this.loggedUser = authData.loggedUser;
      this.eventsHubService.setLoggedIn(true);
    } else {
      this.eventsHubService.setAdminLoggedIn(true);
      this.token = authData.token;
    }
  }

  public login(credentials): Promise<any> {
    if (credentials.email === 'admin@workshop.com' && credentials.password === 'admin') {
      this.eventsHubService.setAdminLoggedIn(true);
      this.localStorageService.set('authData', {
        admin: true
      });
      this.router.navigateByUrl('/user');
    } else {
      return new Promise((resolve, reject) => {
        this.authService.login(credentials).subscribe(
          (result) => {
            this.token = result.token;
            const userId = result.userId;

            this.localStorageService.set('authData', {
              token: this.token,
              id: userId
            });

            this.clientService.getClientAllInfo(userId).subscribe(
              (client) => {
                this.loggedUser = client;
                this.eventsHubService.setLoggedIn(true);
                this.dataservice.setData(client);

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

  public addClient(client): Promise<any> {
    return new Promise((resolve, reject) => {
      this.authService.addClient(client).subscribe(
        (result) => {
          this.token = result.token;
          const userId = result.userId;

          this.localStorageService.set('authData', {
            token: this.token,
            id: userId
          });

          this.clientService.getClientAllInfo(userId).subscribe(
            (clientResult) => {
              this.loggedUser = clientResult;
              this.eventsHubService.setLoggedIn(true);
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

  public getToken(): string {
    const dataLocal = this.localStorageService.get('authData', {});
    const token = dataLocal.token;
    return token;
  }

  public getLoggedUser(): any {
    return this.loggedUser;
  }

  public isLoggedIn(): boolean {
    return this.eventsHubService.loggedIn$.getValue();
  }

  public isAdminLoggedIn(): boolean {
    return this.eventsHubService.adminloggedIn$.getValue();
  }

  public logout(): void {
    // API call for logout if exist then clean the localstorage
    this.authService.logout();
    this.localStorageService.deleteAll();
    this.eventsHubService.setLoggedIn(false);
    this.eventsHubService.setAdminLoggedIn(false);
    this.router.navigate(['/']);
    this.toastrService.success('User logged out');
  }
}
