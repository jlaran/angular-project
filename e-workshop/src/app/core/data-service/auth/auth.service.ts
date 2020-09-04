import { Credentials } from './../../../shared/models/credentials.model';
import { NewClient } from './../../../shared/models/newclient.model';
import { Injectable } from '@angular/core';
import { CONFIG } from 'src/app/config';
import { HttpClient } from '@angular/common/http';
import { timeout } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginApiPath = `${CONFIG.apiPath}/auth`;

  constructor(private http: HttpClient) { }

    // Add One Client
    public addClient(body: NewClient): Observable<any> {
      return this.http
        .post(`${this.loginApiPath}/register`, body)
        .pipe(timeout(CONFIG.timeoutRequest));
    }

    public login(body: Credentials): Observable<any> {
      return this.http
        .post(`${this.loginApiPath}`, body)
        .pipe(timeout(CONFIG.timeoutRequest));
    }

    public logout(): Observable<any> {
      return this.http
        .post(`${this.loginApiPath}/logout`, {})
        .pipe(timeout(CONFIG.timeoutRequest));
    }

    public forgotPassword(email: string): Observable<any> {
      return this.http.post(`${this.loginApiPath}/forgotPassword`, {
        emailAddress: email,
      });
    }
}
