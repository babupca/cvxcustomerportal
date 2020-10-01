import { Component, OnInit, Input } from '@angular/core';
import { BannercustomerService } from 'src/app/services/bannercustomer.service'
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-customer-banner',
  templateUrl: './customer-banner.component.html',
  styleUrls: ['./customer-banner.component.css']
})
export class CustomerBannerComponent implements OnInit {
  bannerContent: string;
  @Input() currentAccountimage: any;
  @Input() bannerImageData: any;

  customerDetails: any;
  constructor(private bannerCustomer: BannercustomerService) { }

  ngOnInit() {
    this.customerDetails = JSON.parse(localStorage.getItem("customerDetails"));
    this.banercontent();
  }

  ngOnChanges() {
    this.getAccountImageAsPerVisitID();
  }

  banercontent() {
    this.bannerCustomer.getBannerData().subscribe(data => {
      this.bannerContent = data[0].bannerContent;
      console.log(data);
    })
  }


  getAccountImageAsPerVisitID() {
    if (this.currentAccountimage !== undefined) {
      this.bannerCustomer.getAccountLogoForAccountId(this.currentAccountimage).subscribe(data => {
        this.bannerImageData = data;
      })
    }
  }

}
