import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { NewClientModalComponent } from './new-client-modal/new-client-modal.component';
import { FormsModule } from '@angular/forms';
import { NewCarModalComponent } from './new-car-modal/new-car-modal.component';
import { ClientSettingsComponent } from './client-settings/client-settings.component';
import { WorkshopServicesComponent } from './workshop-services/workshop-services.component';
import { ClientHeaderComponent } from './client-header/client-header.component';
import { ClientWrapperComponent } from './client-wrapper/client-wrapper.component';


@NgModule({
  declarations: [ClientDashboardComponent, NewClientModalComponent, NewCarModalComponent, ClientSettingsComponent, WorkshopServicesComponent, ClientHeaderComponent, ClientWrapperComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,
    FormsModule
  ]
})
export class ClientModule { }
