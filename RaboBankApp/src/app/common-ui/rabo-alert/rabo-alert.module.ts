import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RaboAlertComponent } from './rabo-alert.component';

@NgModule({
  declarations: [RaboAlertComponent],
  imports: [
    CommonModule
  ],
  exports:[RaboAlertComponent]
})
export class RaboAlertModule { }
