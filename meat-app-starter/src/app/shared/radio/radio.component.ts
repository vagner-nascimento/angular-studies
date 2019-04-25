import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { RadioOption } from './radio-option.model';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'mt-radio',
  templateUrl: './radio.component.html',

  /**
   * IMPORTANT: 
   * - Ever when you uses 'ControlValueAccessor' interface you must to implment this provider in the .ts component's file.
   * - The provider is 'NG_VALUE_ACCESSOR' and you need to use 'useExisting' with the function like that:  forwardRef(() => RadioComponent)
   *      where 'RadioComponent' is a reference of the component.
   * - It register the component as a Value Acessor, which is available as other directives, like ngModel and others
   */
  providers: [
    { 
      provide: NG_VALUE_ACCESSOR, 
      useExisting: forwardRef(() => RadioComponent), 
      multi: true
    }
  ]
})
export class RadioComponent implements OnInit, ControlValueAccessor {

  @Input() options: RadioOption[]

  value: any
  onChange: any

  constructor() { }

  ngOnInit() {
  }

  setValue(value: any) {
    this.value = value

    /* 
    this.onChange(this.value): Calling the function passed by 'registerOnChange' method.
    It informs the directives used with the component that it changes
    */
    this.onChange(this.value) 
  }

  /*  
  NOTES CONTROL VALUE ACCESSOR:
  1) Used to gives access to this component to his parent
  */
  /**
   * This method is called when parent want pass a value to be setted
   */
  writeValue(obj: any): void {
    this.value = obj
  }

  /**
   * The parent pass a function that we must to execute 
   * always when the internal value of the component was changed
   */
  registerOnChange(fn: any): void {
    this.onChange = fn
  }

  /**
   * This method recevies a function to inform when the component was touched
   * Not necessary for now
   */
  registerOnTouched(fn: any): void {
    
  }

  /**
   * Not necessary for now
   */
  setDisabledState?(isDisabled: boolean): void {
    
  }

}
