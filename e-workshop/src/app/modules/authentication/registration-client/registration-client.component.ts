import { NewClient } from './../../../shared/models/newclient.model';
import { AuthService } from './../../../core/data-service/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication/authentication.service';

@Component({
  selector: 'e-workshop-registration-client',
  templateUrl: './registration-client.component.html',
  styleUrls: ['./registration-client.component.scss']
})
export class RegistrationClientComponent implements OnInit {
  private newClient: NewClient;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
  }

  public onSubmit(signUpForm: NgForm): void {
    if(
      (signUpForm.value.idNumber !== '' || signUpForm.value.firstName !== '' ||
      signUpForm.value.lastName !== '' || signUpForm.value.address !== '' ||
      signUpForm.value.email !== '' || signUpForm.value.phone !== '' ||
      signUpForm.value.password !== '' || signUpForm.value.confirmationPassword !== '')
    ){
      if (signUpForm.value.password === signUpForm.value.confirmationPassword) {
        this.newClient = signUpForm.value;
        this.authenticationService.addClient(this.newClient)
          .then(() => {
            this.router.navigateByUrl('/client');
          })
          .catch((error) => {
            // this.toastrService.error(error);
            console.log(error);
          });
      } else {
        this.toastrService.error('Password doesn\'t match');
      }
    } else {
      this.toastrService.error('Please fill the form');
    }
  }
}
