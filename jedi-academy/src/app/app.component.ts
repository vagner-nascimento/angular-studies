import { Component } from '@angular/core';
import { Student } from './student/student.model';

@Component({
  selector: 'jad-root', //NOTE: This annotation contain the map for the html and css page putted on browser
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
/*
IMPORTANT NOTE: These objects are json representation of Student interface, founded in student component folder
Remeber, you should to send boolean and numbers as it is, not strings
*/
  students: Student[] = [
    {name: "Luke", isJedi: true, temple: "Coruscant"},
    {name: "Han Solo", isJedi: false},
    {name: "Yoda Master", isJedi: true, temple: "Black Kaiser" },
    {name: "Leia Princess", isJedi: false }
  ]
}
