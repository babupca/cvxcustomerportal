import { Component, OnInit, Input, ViewChild, SimpleChanges } from '@angular/core';
import { SessionsComponent } from 'src/app/customer-sessions/sessions/sessions.component';
import { MyvisitService } from 'src/app/services/myvisit.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { DataserviceService } from '../services/dataservice.service';
import { Subscription } from 'rxjs';
import { BannercustomerService } from '../services/bannercustomer.service';
@Component({
  selector: 'app-customer-sessions',
  templateUrl: './customer-sessions.component.html',
  styleUrls: ['./customer-sessions.component.css']
})

export class CustomerSessionsComponent implements OnInit {
  private subscription: Subscription;
  customerDetails: any;
  visitId: string;
  visitInfo: any;
  stage: string;
  status: string;
  currentAccountimage: any;
  visitIdAnddatesArray: any;
  getVisitId: string;
  getCurrentStage: string;
  bannerImageData: any;
  constructor(
    private myVisitsvc: MyvisitService,
    private spinner: NgxSpinnerService,
    public dataService: DataserviceService,
    private bannerCustomer: BannercustomerService) { }
  ngOnInit() {
    this.customerDetails = JSON.parse(localStorage.getItem('customerDetails'));
    this.loadFirstVisit();
    this.getAccountLogoForAccountId();
  }




  loadFirstVisit() {

    this.getVisitId = this.dataService.getVisitId();

    this.subscription = this.myVisitsvc.getVisitIdAndDates(this.customerDetails.nameid).subscribe((data) => {
      if (this.getVisitId && this.getVisitId !== undefined) {
        this.reloadVisitDetails(this.getVisitId);
      } else {
        this.reloadVisitDetails(data[0].visitId);
      }
      this.reloadCurrentStage(data[0].currentStage);
      this.reloadCurrentStatus(data[0].currentStatus);
    });
  }

  reloadVisitDetails(newvisitId) {
    this.visitId = newvisitId;
  }
  reloadCurrentStage(currentStage) {
    console.log(currentStage);
    this.stage = currentStage;
  }
  reloadAccountImage(currectAccountImage) {
    this.currentAccountimage = currectAccountImage;
  }
  reloadCurrentStatus(currentStatus) {
    console.log(currentStatus);
    this.status = currentStatus;
  }
  getAccountLogoForAccountId() {
    this.bannerCustomer.getAccountLogoForAccountId(this.customerDetails.OngoingAccountId).subscribe(data => {
      this.bannerImageData = data;
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  // reloadSessioncomponent(){
  //   this.sessionCmpt.reloadsession();
  // }

}
