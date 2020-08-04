import { Component, VERSION, ViewChild, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { ToggleComponent } from './toggle/toggle.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  @ViewChildren(ToggleComponent) toggleComps: QueryList<ToggleComponent>;
  // @ViewChild('toggleComp', {static: true}) toggleComp: ToggleComponent;
  @ViewChild('toggleBtn', {static: true}) toggleBtn: ElementRef<HTMLButtonElement>;
  @ViewChild('nameInput', {static: true}) nameInput: ElementRef<HTMLInputElement>;

  name = 'Angular ' + VERSION.major;
  isChecked = true;
  showlast = true;
  ngOnInit(){
    this.nameInput.nativeElement.focus();
    console.log('init', this.nameInput);
  }
  ngAfterViewInit(){
    this.toggleComps.changes.subscribe(console.log);
  }
}
