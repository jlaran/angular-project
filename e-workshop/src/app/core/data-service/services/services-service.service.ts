import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CONFIG } from 'src/app/config';
import { timeout } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServicesServiceService {

  private apiPath = `${CONFIG.apiPath}/services`;

  constructor(private http: HttpClient) { }

  // Get All Users
  public getServices(): Observable<any> {
    return this.http
      .get(`${this.apiPath}`)
      .pipe(timeout(CONFIG.timeoutRequest));
  }

  // Get One User
  public getService(serviceId: number): Observable<any> {
    return this.http
      .get(`${this.apiPath}/${serviceId}`)
      .pipe(timeout(CONFIG.timeoutRequest));
  }

  // Add One User
  public addService(body: any): Observable<any> {
    return this.http
      .post(`${this.apiPath}`, body)
      .pipe(timeout(CONFIG.timeoutRequest));
  }

  // Update One User
  public updateService(serviceId: number, body: any): Observable<any> {
    return this.http
      .patch(`${this.apiPath}/${serviceId}`, body)
      .pipe(timeout(CONFIG.timeoutRequest));
  }
}
