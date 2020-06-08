import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-customer-header',
  templateUrl: './customer-header.component.html',
  styleUrls: ['./customer-header.component.css']
})
export class CustomerHeaderComponent implements OnInit {
  customerName: object;
  constructor(private route:Router) { }

  ngOnInit() {
    let getCustomer = localStorage.getItem('customerDetails');
    this.customerName = JSON.parse(getCustomer);
    
  }
  logout(){
    localStorage.clear();
    this.route.navigateByUrl('/customerLogin');
  }
}
