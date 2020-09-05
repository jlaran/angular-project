import { CONFIG } from './config/index';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ew-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  private apiPath = `${CONFIG.apiPath}`;

  constructor(private translate: TranslateService, private http: HttpClient){
    translate.setDefaultLang('es');
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
