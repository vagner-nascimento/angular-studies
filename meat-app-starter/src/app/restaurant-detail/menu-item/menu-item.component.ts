import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuItem } from './menu-item.model';

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html'
})
export class MenuItemComponent implements OnInit {

  @Input() menuItem: MenuItem //NOTES: When parent component will gives you, you must to use @Input

  @Output() add = new EventEmitter /* All events must uses @Output.
                                    EventEmitter is used to create a custom event to the component.

                                    */
  constructor() { }

  ngOnInit() {
  }

  emitAddEvent() { /* It is used on HTML to emit(send) the cliecked menu item to the parent. 
                    So the parent can do some action o this element.
                    The internal component should just to emit the data, the rest is with the parent*/
    this.add.emit(this.menuItem)
  }

}
