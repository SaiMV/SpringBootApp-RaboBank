import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RaboHomeComponent } from './rabo-home.component';

@NgModule({
  declarations: [RaboHomeComponent],
  imports: [
    CommonModule
  ],
  exports:[
    RaboHomeComponent
]
})
export class RaboHomeModule { }
