import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoboListTableComponent } from '../../common-ui/robo-list-table/robo-list-table.component';

@NgModule({
  declarations: [RoboListTableComponent],
  imports: [
    CommonModule,
  ],
  exports:[
    RoboListTableComponent
  ]
})
export class RoboListTableModule { }
