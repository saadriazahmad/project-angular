import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent {
  @Input() product : Product | undefined;//parent mein child selector k sath ek binding add ki aur yahan receive kr li because notify wala kaam hum child mein krna chahty hain
  @Output() notify = new EventEmitter();//yahan event occur honay pe bs event emit kren ge aur parent mein bhej k wahin method bna k call krwa len ge
}
