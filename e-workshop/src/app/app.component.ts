import { EventsHubService } from './core/services/events-hub/events-hub.service';
import { LocalStorageService } from 'src/app/core/services/local-storage/local-storage.service';
import { CONFIG } from './config/index';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ew-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  private apiPath = `${CONFIG.apiPath}`;

  constructor(
    private translate: TranslateService,
    private http: HttpClient,
    private eventService: EventsHubService,
    private local: LocalStorageService

  ){
    translate.setDefaultLang('es');
  }

  ngOnInit(): void {
    const authData = this.local.get('authData');
    if (authData) {
      if (authData.id) {
        this.eventService.setLoggedIn(true);
      }
      if (authData.admin) {
        this.eventService.setAdminLoggedIn(true);
      }
    }
  }

  // onCreatePost(user: {name: string, email: string, password: string}): void {
  //   // console.log(postData);
  //   this.http.post(`${this.apiPath}/user/register`, user).subscribe(
  //     res => {
  //       console.log(res);
  //   });
  // }

  // onGetToken(user: {name: string, email: string, password: string}): void {
  //   // console.log(postData);
  //   this.http.post(`${this.apiPath}/user/login`, user).subscribe(
  //     res => {
  //       console.log(res);
  //   });
  // }
}
