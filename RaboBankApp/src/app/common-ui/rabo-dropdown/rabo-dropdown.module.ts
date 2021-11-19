import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RaboDropdownComponent } from './rabo-dropdown.component';

@NgModule({
  declarations: [RaboDropdownComponent],
  imports: [
    CommonModule
  ],
  exports:[RaboDropdownComponent]
})
export class RaboDropdownModule { }
