import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooleanToHumanPipe } from './pipes/boolean-to-human.pipe';
import { TranslateModule } from '@ngx-translate/core';
// import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [BooleanToHumanPipe],
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule
    // SweetAlert2Module,
  ],
  exports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    // SweetAlert2Module,
    BooleanToHumanPipe
  ]
})

export class SharedModule {
}
