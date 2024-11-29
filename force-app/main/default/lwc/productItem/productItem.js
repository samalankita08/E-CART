import { LightningElement, api, track } from 'lwc';

export default class ProductItem extends LightningElement {
  @api product;
  @track quantity = 1;
  @track color = 'Red';
  @track amount;

  updateQuantity(event) {
    this.quantity = parseInt(event.target.value, 10);
  }

  updateColor(event) {
    this.color = event.target.value;
  }
  get getTotal(){
    return this.item.quantity * this.item.price;
  }

  addToCart() {
    this.dispatchEvent(new CustomEvent('addtocart', {
      detail: {
        product: this.product,
        quantity: this.quantity,
        color: this.color
      }
    }));
  }
}
