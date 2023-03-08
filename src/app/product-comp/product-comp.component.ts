import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-comp',
  templateUrl: './product-comp.component.html',
  styleUrls: ['./product-comp.component.css'],
})
export class ProductCompComponent {
  @Input() product!: Product;

  @Output() onShare = new EventEmitter<Product>();

  onShareClick() {
    this.onShare.emit(this.product);
  }

  // share() {
  //   window.alert('The product has been shared!');
  // }

  @Output() onNotify = new EventEmitter();
}
