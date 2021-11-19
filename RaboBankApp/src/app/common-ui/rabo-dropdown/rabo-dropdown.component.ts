import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'rabo-dropdown',
  templateUrl: './rabo-dropdown.component.html',
  styleUrls: ['./rabo-dropdown.component.css']
})
export class RaboDropdownComponent implements OnInit {

  toggleDropDown:boolean = false;
  @Input() dropDownHeader:string = "";
  @Input() dropDownData:any[] = []
  @Input() defaultSelectedValue:string = "Select";
  @Output() selectionHasChanged = new EventEmitter<string>();
  @Output() currentSelectedValue:string = "Select";

  constructor() { }

  ngOnInit() {
  }

  /**
   * Method to get the defult text in the ui if user selected nothing.
   */
  getText(){
    return this.currentSelectedValue =="Select" ?this.defaultSelectedValue:this.currentSelectedValue;
  }

  /**
   * Method is called from the ui to notify the selected drop down value the parant component.
   * @param text 
   */
  selectionChanged(text){
    if(this.currentSelectedValue != text){
      this.currentSelectedValue = text;
      this.selectionHasChanged.emit(text);
    }
    this.toggleDropDown = false;
  }
}
