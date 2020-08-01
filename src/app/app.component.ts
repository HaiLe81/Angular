import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado', 'Hai Le'];
  user = {
    name: 'Hai Le',
    age: 22
  }
  handler(event){
    console.log('Clicked', event.target.value)
  }
}
