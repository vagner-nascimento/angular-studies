import { Component } from '@angular/core';

@Component({
  selector: 'jad-root', //NOTE: This annotation contain the map for the html and css page putted on browser
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'jedi-academy';
}
