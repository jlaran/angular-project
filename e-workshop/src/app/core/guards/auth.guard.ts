import { Injectable } from '@angular/core';
import { Router, Route, CanLoad } from '@angular/router';
import { AuthenticationService } from '../services/authentication/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad {
  constructor(
    private readonly authenticationService: AuthenticationService,
    private readonly router: Router
  ) {}

  public canLoad(route: Route): boolean {
    if (this.authenticationService.isLoggedIn()) {
      return this.authenticationService.isLoggedIn();
    }
    if (this.authenticationService.isAdminLoggedIn()) {
      this.router.navigate(['/user']);
      return false;
    }
  }
}
