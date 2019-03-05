import { Component, OnInit, Input } from '@angular/core';

import { Student } from './student.model';

@Component({
  selector: 'jad-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
  // ,inputs: ['name', 'isJedi'] //You can declare inputs on this Component's property
})
export class StudentComponent implements OnInit {
  /* 
    NOTE: Using @Input to send data to template. You can change the
    attribute name using like that: @Input('value') name: string = "Lucke".
    This is the most commum way to bind properties to template
  */
  @Input() student: Student

  constructor() { }

  ngOnInit() {
  }
}
