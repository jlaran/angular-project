import { Quote } from './../../../shared/models/quote.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONFIG } from 'src/app/config';
import { Observable } from 'rxjs';
import { timeout } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuotesServiceService {

  private apiPath = `${CONFIG.apiPath}/quotes`;

  constructor(private http: HttpClient) { }

  // Get All Quotes
  public getQuotes(): Observable<any> {
    return this.http
      .get(`${this.apiPath}`)
      .pipe(timeout(CONFIG.timeoutRequest));
  }

  // Get One Quote
  public getQuote(quoteId: number): Observable<any> {
    return this.http
      .get(`${this.apiPath}/${quoteId}`)
      .pipe(timeout(CONFIG.timeoutRequest));
  }

  // Add One Quote
  public addQuote(body: Quote): Observable<any> {
    return this.http
      .post(`${this.apiPath}`, body)
      .pipe(timeout(CONFIG.timeoutRequest));
  }

  // Update One Quote
  public updateQuote(quoteId: number, body: Quote): Observable<any> {
    return this.http
      .patch(`${this.apiPath}/${quoteId}`, body)
      .pipe(timeout(CONFIG.timeoutRequest));
  }
}
