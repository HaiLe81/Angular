import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'toggle',
    templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent {
  @Input() checked = false;
  @Output() checkedChange = new EventEmitter<boolean>();

  toggle(){
    this.checkedChange.emit(!this.checked)
  }
}