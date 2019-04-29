import { Component, OnInit } from '@angular/core';
import { RadioOption } from '../shared/radio/radio-option.model';
import { OrderService } from './order.service';
import { CartItem } from '../restaurant-detail/shopping-cart/cart-item.model';
import { Order, OrderItem } from './order.model';
import { Router } from '@angular/router';


@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  delivery: number = 8

  paymentOtions: RadioOption[] = [
    {label: 'Dinheiro', value: 'MON'},
    {label: 'Cartao Débito', value: 'DEB'},
    {label: 'Cartao Refeiçao', value: 'REF'}
  ]

  constructor(private orderService: OrderService,
              private router: Router) { }
  /**
   * NOTES ROUTER INSIDE THE CODE
   * 1) With this injected Router we're abble to call his navigative method to redirect
   *    the navigation to another component. E.g.: this.router.navigate(['/order-summary'])
   */

  ngOnInit() {
  }

  itemsValue(): number {
    return this.orderService.itemsValue()
  }

  cartItems(): CartItem[] {
    return this.orderService.cartItems()
  }

  increaseQty(item: CartItem) {
    this.orderService.increaseQty(item)
  }

  decreaseQty(item: CartItem) {
    this.orderService.decreaseQty(item)
  }

  remove(item: CartItem) {
    this.orderService.remove(item)
  }

  checkOrder(order: Order) {
    order.orderItems = this.cartItems()
                           .map(ci => new OrderItem(ci.quantity, ci.menuItem.id))

    this.orderService.checkOrder(order).subscribe(orderId => {
      this.router.navigate(['/order-summary'])
      console.info(`Compra concluída: ${orderId}`)
      this.orderService.clear()
    })
  }  
}
