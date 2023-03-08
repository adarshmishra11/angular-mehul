import { Component } from '@angular/core';
import { CartService } from 'src/services/cart.service';
import { Product } from '../products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cartItems: Product[] = this.cartService.getCartItems();
  constructor(private cartService: CartService) {}
}
