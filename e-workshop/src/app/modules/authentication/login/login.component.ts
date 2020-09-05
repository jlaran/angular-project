import { LocalStorageService } from 'src/app/core/services/local-storage/local-storage.service';
import { EventsHubService } from './../../../core/services/events-hub/events-hub.service';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from './../../../core/services/authentication/authentication.service';
import { Credentials } from './../../../shared/models/credentials.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'ew-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public credentials: Credentials = new Credentials();
  public errorMsg = '';

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private toastrService: ToastrService,
    private eventsHubService: EventsHubService,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
  }

  onLogIn(loginForm: NgForm): void {
    this.credentials = loginForm.value;
    if (this.credentials.email === 'admin@workshop.com' && this.credentials.password === 'admin') {
      console.log('Admin');
      this.eventsHubService.setAdminLoggedIn(true);
      this.localStorageService.set('authData', {
        admin: true,
        token: 'abc'
      });
      this.router.navigateByUrl('/user');
    } else {
      console.log('Cliente');
      if (loginForm.value.email !== '' && loginForm.value.password !== ''){
        this.authenticationService
          .login(this.credentials)
          .then(() => {
            this.router.navigateByUrl('/client/dashboard');
          })
          .catch((error) => {
            this.toastrService.error(error.error.text);
            // console.log(error);
          });
      } else {
        this.toastrService.error('Please enter your email and password');
      }
    }
  }

    // this.router.navigateByUrl('/user');

}
