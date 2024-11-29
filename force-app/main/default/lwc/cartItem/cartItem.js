import { LightningElement, api } from 'lwc';

export default class CartItem extends LightningElement {
  @api item;

  get totalPrice() {
    return this.item.quantity * this.item.current_price;
  }
  
  removeItem() {
    this.dispatchEvent(new CustomEvent('removefromcart', {
      detail: this.item.id // Send the product ID to the parent
    }));
  }

}

