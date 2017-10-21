import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {
  public headerData = [];
  public tableData = [];
  constructor() { }


  ngOnInit() {
    this.headerData = ['Date', 'Description', 'Type', 'Amount', 'Balance'];
    this.tableData = [
      ['2017-10-19', 'Discover E-Payment', 'ACH Debit', '$100', '$1345'],
      ['2017-10-15', 'ASU Direct Deposit', 'ACH Credit', '$100', '$1445'],
    ];
  }

}
