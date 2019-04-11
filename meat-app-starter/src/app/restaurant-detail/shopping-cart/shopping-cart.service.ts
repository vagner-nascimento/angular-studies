import { CartItem } from './cart-item.model';
import { MenuItem } from '../menu-item/menu-item.model';

export class ShoppingCartService {
    items: CartItem[] = []

    clear() {
        this.items = []
    }

    addItem(item:MenuItem) {
        let itemFound = this.items.find(it => it.menuItem.id === item.id)
        if(itemFound) {
            itemFound.quantity++
        } else {
            this.items.push(new CartItem(item))
        }
    }

    removeItem(item:CartItem) {
        this.items.splice(this.items.indexOf(item), 1)
    }

    total(): number {
        return this.items
                    .map(it => it.value())
                    .reduce((previous, actual) => previous + actual, 0)
                    //NOTES: ".reduce()" sums(or do some other operation) the values of array
    }
}