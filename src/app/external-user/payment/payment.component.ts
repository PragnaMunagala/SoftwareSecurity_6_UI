import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  credit = true;
  constructor() { }

  ngOnInit() {
  }

  Payments(type) {
    if (type === 'credit') {
      this.credit = true;
    } else if (type === 'id') {
      this.credit = false;
    }
  }
}
