import { ClientWrapperComponent } from './client-wrapper/client-wrapper.component';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { WorkshopServicesComponent } from './workshop-services/workshop-services.component';
import { ClientSettingsComponent } from './client-settings/client-settings.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ClientWrapperComponent,
    children: [
      {
        path: 'dashboard',
        component: ClientDashboardComponent
      },
      {
        path: 'settings',
        component: ClientSettingsComponent
      },
      {
        path: 'services',
        component: WorkshopServicesComponent
      }
    ]
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'client/dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
