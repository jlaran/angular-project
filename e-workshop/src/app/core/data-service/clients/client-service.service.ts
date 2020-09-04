import { Car } from './../../../shared/models/car.model';
import { LocalStorageService } from './../../services/local-storage/local-storage.service';
import { Client } from './../../../shared/models/client.model';
import { CONFIG } from 'src/app/config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { timeout } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {
  private apiPath = `${CONFIG.apiPath}/clients`;

  constructor(
    private http: HttpClient,
    private readonly localStorageService: LocalStorageService
  ) { }

  // Get All Clients
  public getClients(): Observable<any> {
    return this.http
      .get(`${this.apiPath}`)
      .pipe(timeout(CONFIG.timeoutRequest));
  }

  // Get One Client
  public getClient(clientId: string): Observable<any> {
    return this.http
      .get(`${this.apiPath}/${clientId}`)
      .pipe(timeout(CONFIG.timeoutRequest));
  }

  // Get One Client All info
  public getClientAllInfo(clientId: string): Observable<any> {
    return this.http
      .get(`${this.apiPath}/${clientId}/all`)
      .pipe(timeout(CONFIG.timeoutRequest));
  }

  // Add a Car to a Client
  public addCarToClient(clientId: string, body: Car): Observable<any> {
    return this.http
      .post(`${this.apiPath}/${clientId}/cars`, body)
      .pipe(timeout(CONFIG.timeoutRequest));
  }

  // Add One Client
  public addClient(body: Client): Observable<any> {
    return this.http
      .post(`${this.apiPath}`, body)
      .pipe(timeout(CONFIG.timeoutRequest));
  }

  // Update One Client
  public updateClient(clientId: string, body: Client): Observable<any> {
    return this.http
      .patch(`${this.apiPath}/${clientId}`, body)
      .pipe(timeout(CONFIG.timeoutRequest));
  }
}
