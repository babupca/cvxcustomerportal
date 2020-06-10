import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-customer-sessions',
  templateUrl: './customer-sessions.component.html',
  styleUrls: ['./customer-sessions.component.css']
})
export class CustomerSessionsComponent implements OnInit {
  customerDetails:any;
  visitId:string;
  constructor() { }
  ngOnInit() {
    this.customerDetails = JSON.parse(localStorage.getItem('customerDetails'));
      this.visitId = this.customerDetails.OngoingVisitId
  }

}
