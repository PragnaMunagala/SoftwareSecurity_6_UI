import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-external-user',
  templateUrl: './external-user.component.html',
  styleUrls: ['./external-user.component.css',  '../app.component.css']
})
export class ExternalUserComponent implements OnInit {
  toDisplay = 'dashboard';
  paramsSubscription: Subscription;
  constructor(public router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.paramsSubscription = this.route.params
      .subscribe(
        (params: Params) => {
          if (this.router.url.includes('/dashboard')) {
            this.toDisplay = 'dashboard';
          } else if (this.router.url.includes('/account')) {
            this.toDisplay = 'account';
          } else if (this.router.url.includes('/payment')) {
            this.toDisplay = 'payment';
          } else if (this.router.url.includes('/profile')) {
            this.toDisplay = 'profile';
          } else if (this.router.url.includes('/requests')) {
            this.toDisplay = 'requests';
          } else if (this.router.url.includes('/statement')) {
            this.toDisplay = 'statement';
          } else if (this.router.url.includes('/transfer')) {
            this.toDisplay = 'transfer';
          }
        }
      );
  }

  tabsClick(item) {
    this.toDisplay = item;
  }

}
