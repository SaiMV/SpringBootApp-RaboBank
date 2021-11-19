import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'robo-list-table',
  templateUrl: './robo-list-table.component.html',
  styleUrls: ['./robo-list-table.component.css']
})
export class RoboListTableComponent implements OnInit {
  
  @Input() tableData: any;
  @Input() tableConfig: any;
  @Input() tableDataFinder: any;

  constructor() { 

  }

  ngOnInit() {

  }
  
}
