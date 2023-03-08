import { Component, OnInit } from '@angular/core';
import { ShippingService, Shipping } from 'src/services/shipping.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css'],
})
export class ShippingComponent implements OnInit {
  shippingPrices: Shipping[] = [];
  constructor(private shipping: ShippingService) {}
  ngOnInit() {
    this.shipping.getShippingDetails().subscribe({
      next: (response) => {
        this.shippingPrices = response;
      },
      error: (err) => {
        console.log('err', err);
      },
    });
  }
}
