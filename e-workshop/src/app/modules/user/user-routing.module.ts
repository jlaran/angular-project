import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserViewClientsComponent } from './user-view-clients/user-view-clients.component';

const routes: Routes = [
  {
    path: '',
    component: UserDashboardComponent
  },
  {
    path: 'clients',
    component: UserViewClientsComponent
  },
  {
    path: ':id',
    component: UserDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
