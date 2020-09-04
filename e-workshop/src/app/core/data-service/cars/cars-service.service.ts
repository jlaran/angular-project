import { Car } from './../../../shared/models/car.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONFIG } from 'src/app/config';
import { Observable } from 'rxjs';
import { timeout } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarsServiceService {

  private apiPath = `${CONFIG.apiPath}/cars`;

  constructor(private http: HttpClient) { }

  // Get All Cars
  public getCars(): Observable<any> {
    return this.http
      .get(`${this.apiPath}`)
      .pipe(timeout(CONFIG.timeoutRequest));
  }

  // Get One Car
  public getCar(carId: number): Observable<any> {
    return this.http
      .get(`${this.apiPath}/${carId}`)
      .pipe(timeout(CONFIG.timeoutRequest));
  }

  // Add One Car
  public addCar(body: Car): Observable<any> {
    return this.http
      .post(`${this.apiPath}`, body)
      .pipe(timeout(CONFIG.timeoutRequest));
  }

  // Update One Car
  public updateCar(carId: number, body: Car): Observable<any> {
    return this.http
      .patch(`${this.apiPath}/${carId}`, body)
      .pipe(timeout(CONFIG.timeoutRequest));
  }
}
