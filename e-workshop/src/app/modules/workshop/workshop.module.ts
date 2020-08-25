import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkshopRoutingModule } from './workshop-routing.module';
import { WorkshopDashboardComponent } from './workshop-dashboard/workshop-dashboard.component';


@NgModule({
  declarations: [WorkshopDashboardComponent],
  imports: [
    CommonModule,
    WorkshopRoutingModule
  ]
})
export class WorkshopModule { }
