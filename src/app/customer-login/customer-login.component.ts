import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
  loginSubmit() {
    this.route.navigateByUrl('/customerSession');
  }
}
