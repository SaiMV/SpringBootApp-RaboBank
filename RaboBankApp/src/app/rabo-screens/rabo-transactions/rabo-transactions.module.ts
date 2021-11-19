import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RaboTransactionsComponent } from './rabo-transactions.component';
import { RoboListTableModule } from 'src/app/common-ui/robo-list-table/robo-list-table.module';
import { HttpClientModule } from '@angular/common/http';
import { RaboDropdownModule } from 'src/app/common-ui/rabo-dropdown/rabo-dropdown.module';

@NgModule({
  declarations: [RaboTransactionsComponent],
  imports: [
    CommonModule,
    RoboListTableModule,
    HttpClientModule,
    RaboDropdownModule
  ],
  exports:[
    RaboTransactionsComponent
]
})
export class RaboTransactionsModule { }
