import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/services/cart.service';
import { Product, products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product!: Product | undefined;

  isItemExist(id: Number) {
    let cartItems = this.cartService.getCartItems();
    let index = cartItems.findIndex((item) => item.id === id);
    let isItemExist = index >= 0 ? true : false;
    return isItemExist;
  }

  onBuy() {
    if (this.product) {
      if (this.isItemExist(this.product.id)) {
        alert('items already added');
      } else {
        alert('Items added to your cart');
        this.cartService.updateCartItems(this.product);
      }
    }
  }

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit() {
    let routerPath = this.route.snapshot.paramMap;
    let productId = Number(routerPath.get('productId'));

    this.product = products.find((item) => item.id === productId);
  }
}
