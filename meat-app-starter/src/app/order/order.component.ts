import { Component, OnInit } from '@angular/core';
import { RadioOption } from '../shared/radio/radio-option.model';


@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  paymentOtions: RadioOption[] = [
    {label: 'Dinheiro', value: 'MON'},
    {label: 'Cartao Débito', value: 'DEB'},
    {label: 'Cartao Refeiçao', value: 'REF'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
