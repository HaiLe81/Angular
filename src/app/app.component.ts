import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;

  isDanger = false;
  isWarning = false;
  classes="box red-danger yellow-background"
  value = '';
  onKey(value: any){
    if(value.trim() === '') return;
    this.value += value + ' | ' ;
  }

}
