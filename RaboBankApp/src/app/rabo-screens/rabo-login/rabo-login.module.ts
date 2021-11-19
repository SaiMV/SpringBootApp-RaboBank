import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RaboLoginComponent } from './rabo-login.component';

@NgModule({
  declarations: [RaboLoginComponent],
  imports: [
    CommonModule
  ],
  exports:[
    RaboLoginComponent
]
})
export class RaboLoginModule { }
