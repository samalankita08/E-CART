import { LightningElement, api } from 'lwc';

export default class OrderedProductItem extends LightningElement {
  @api item;

  get totalPrice() {
    return this.item.quantity * this.item.current_price;
  }
}
