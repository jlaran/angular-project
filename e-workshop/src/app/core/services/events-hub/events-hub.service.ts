import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsHubService {
  public loggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public adminloggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {}

  public setLoggedIn(value: boolean): void {
    this.loggedIn$.next(value);
  }

  public setAdminLoggedIn(value: boolean): void {
    this.adminloggedIn$.next(value);
  }
}
