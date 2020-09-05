import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

import { FormsModule } from '@angular/forms';
import { NewUserModalComponent } from './new-user-modal/new-user-modal.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserViewClientsComponent } from './user-view-clients/user-view-clients.component';

@NgModule({
  declarations: [UserDashboardComponent, NewUserModalComponent, UserDetailComponent, UserViewClientsComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ]
})
export class UserModule { }
