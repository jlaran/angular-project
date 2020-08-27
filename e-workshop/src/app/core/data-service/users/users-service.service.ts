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

  public getUsers(): Observable<any> {
    return this.http
      .get(`${this.apiPath}`)
      .pipe(timeout(CONFIG.timeoutRequest));
  }

  public getUser(userId: number): Observable<any> {
    return this.http
      .get(`${this.apiPath}`)
      .pipe(timeout(CONFIG.timeoutRequest));
  }
}
