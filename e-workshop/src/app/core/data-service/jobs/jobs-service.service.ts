import { Job } from './../../../shared/models/job.mode';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONFIG } from 'src/app/config';
import { Observable } from 'rxjs';
import { timeout } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JobsServiceService {

  private apiPath = `${CONFIG.apiPath}/jobs`;

  constructor(private http: HttpClient) { }

  // Get All Jobs
  public getJobs(): Observable<any> {
    return this.http
      .get(`${this.apiPath}`)
      .pipe(timeout(CONFIG.timeoutRequest));
  }

  // Get One Job
  public getJob(quoteId: number): Observable<any> {
    return this.http
      .get(`${this.apiPath}/${quoteId}`)
      .pipe(timeout(CONFIG.timeoutRequest));
  }

  // Add One Job
  public addJob(body: Job): Observable<any> {
    return this.http
      .post(`${this.apiPath}`, body)
      .pipe(timeout(CONFIG.timeoutRequest));
  }

  // Update One Job
  public updateJob(jobId: number, body: Job): Observable<any> {
    return this.http
      .patch(`${this.apiPath}/${jobId}`, body)
      .pipe(timeout(CONFIG.timeoutRequest));
  }
}
