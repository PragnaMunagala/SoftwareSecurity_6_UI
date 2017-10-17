import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-internal-user',
  templateUrl: './internal-user.component.html',
  styleUrls: ['./internal-user.component.css', '../app.component.css']
})
export class InternalUserComponent implements OnInit {
  toDisplay = 'dashboard';
  paramsSubscription: Subscription;
  constructor(public router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.paramsSubscription = this.route.params
      .subscribe(
        (params: Params) => {
          if (this.router.url.includes('/user-profile')) {
            this.toDisplay = 'user-profile';
          } else if (this.router.url.includes('/accounts')) {
            this.toDisplay = 'accounts';
          } else if (this.router.url.includes('/authorize')) {
            this.toDisplay = 'authorize';
          } else if (this.router.url.includes('/log-file')) {
            this.toDisplay = 'log-file';
          }
        }
      );
  }

  tabsClick(item) {
    this.toDisplay = item;
  }
}
