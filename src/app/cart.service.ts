import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Product} from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items:Product[] =[];
  addToCart(product: Product) {
    this.items.push(product);
  }
  removeFromCart(product:Product){

  }
  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
  constructor(
    private http: HttpClient) { }
}
