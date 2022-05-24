import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction-page',
  templateUrl: './transaction-page.component.html',
  styleUrls: ['./transaction-page.component.css']
})
export class TransactionPageComponent implements OnInit {
  transactionInfo = [{
    transactionDate:"7 Oct 2020",
    transaction: "debit",
    amount:"₹ 3000",
    time:"10:24 PM",
    transactionId:"A324591286354723",
    requested:false
  },
  {
    transactionDate:"18 Nov 2020",
    transaction: "debit",
    amount:"₹ 250",
    time:"10:24 AM",
    transactionId:"A324591286354723",
    requested:true
  },
  {
    transactionDate:"19 Nov 2020",
    transaction: "credit",
    amount:"₹ 250",
    time:"10:24 AM",
    transactionId:"A239473734738648",
    requested:false
  },
  {
    transactionDate:"19 Nov 2020",
    transaction: "credit",
    amount:"₹ 250",
    time:"10:24 AM",
    transactionId:"A324591286354723",
    requested:true
  }];

  public date = new Set<string>();
  isPresent(date:any){ 
    if(this.date.has(date)){
      return true;
    }
    else{
      this.date.add(date);
      return false;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
