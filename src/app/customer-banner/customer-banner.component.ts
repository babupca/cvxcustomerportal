import { Component, OnInit } from '@angular/core';
import { BannercustomerService } from 'src/app/services/bannercustomer.service'
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-customer-banner',
  templateUrl: './customer-banner.component.html',
  styleUrls: ['./customer-banner.component.css']
})
export class CustomerBannerComponent implements OnInit {
  bannerContent: string;
  constructor( private bannerCustomer : BannercustomerService) { }

  ngOnInit() {
    this.banercontent();
  }

  banercontent(){
   this.bannerCustomer.getBannerData().subscribe(data=>{
     this.bannerContent = data[0].bannerContent;
     console.log(data);
   })
  }

}
