import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
export interface Shipping {
  type: string;
  price: number;
}

@Injectable({
  providedIn: 'root',
})
export class ShippingService {
  constructor(private httpClient: HttpClient) {}

  getShippingDetails(): Observable<Shipping[]> {
    return this.httpClient.get<Shipping[]>('./assets/shipping.json');
  }
}
