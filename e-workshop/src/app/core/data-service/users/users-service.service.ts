import { User } from './../../../shared/models/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { timeout } from 'rxjs/operators';
import { CONFIG } from 'src/app/config';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {
  private apiPath = `${CONFIG.apiPath}/users`;

  constructor(private http: HttpClient) { }

  // Get All Users
  public getUsers(): Observable<any> {
    return this.http
      .get(`${this.apiPath}`)
      .pipe(timeout(CONFIG.timeoutRequest));
  }

  // Get One User
  public getUser(userId: number): Observable<any> {
    return this.http
      .get(`${this.apiPath}/${userId}`)
      .pipe(timeout(CONFIG.timeoutRequest));
  }

  // Add One User
  public addUser(body: User): Observable<any> {
    return this.http
      .post(`${this.apiPath}`, body)
      .pipe(timeout(CONFIG.timeoutRequest));
  }

  // Update One User
  public updateUser(userId: number, body: User): Observable<any> {
    return this.http
      .patch(`${this.apiPath}/${userId}`, body)
      .pipe(timeout(CONFIG.timeoutRequest));
  }
}
