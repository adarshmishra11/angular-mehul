import { Injectable } from '@angular/core';
import { Product } from 'src/app/products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems: Product[] = [];

  constructor() {}

  getCartItems() {
    return this.cartItems;
  }

  updateCartItems(product: Product) {
    this.cartItems.push(product);
  }
}
