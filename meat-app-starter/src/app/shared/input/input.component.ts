import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core'
import { NgModel, FormControlName } from '@angular/forms'

@Component({
  selector: 'mt-input-container',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit, AfterContentInit {
  
  @Input() label: string
  @Input() errorMessage: string

  input: any //This represents the input gived by the parent component

  /* NOTES @ContentChild:
    1) The parameter could an elemnt or a directive. In this case is used NgModel directive
    2) It enables the passage of an element ou Angular directive trhough this component
        Ex.: <mt-input-container><input name='n' ngModel /></mt-input-container>
  */
  @ContentChild(NgModel) model: NgModel
  @ContentChild(FormControlName) control: FormControlName

  constructor() { }

  ngOnInit() {
  }

  /* NOTES AfterContentInit interface
    1) It provides 'ngAfterContentInit' method to implement
    2) This method is called after component's content initialization
  */
  ngAfterContentInit(): void {
    this.input = this.model || this.control

    if(this.input === undefined) {
      throw new Error("This component demands a NgModel or FormControlName directive on the input")
    }
  }

  hasSuccess(): boolean {
    return this.input.valid && (this.input.dirty || this.input.touched)
  }

  hasError(): boolean {
    return this.input.invalid && (this.input.dirty || this.input.touched)
  }
}
