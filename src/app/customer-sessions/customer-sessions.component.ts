import { Component, OnInit, Input, ViewChild, SimpleChanges } from '@angular/core';
import { SessionsComponent } from 'src/app/customer-sessions/sessions/sessions.component';
import { MyvisitService } from 'src/app/services/myvisit.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { DataserviceService } from '../services/dataservice.service';
import { Subscription } from 'rxjs';
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
  visitIdAnddatesArray: any;
  getVisitId: string;
  getCurrentStage: string;
  constructor(
    private myVisitsvc: MyvisitService,
    private spinner: NgxSpinnerService,
    public dataService: DataserviceService) { }
  ngOnInit() {
    this.customerDetails = JSON.parse(localStorage.getItem('customerDetails'));
    this.loadFirstVisit();
    setInterval(()=>{
      this.loadFirstVisit();
    }, 10000)
  }




  loadFirstVisit() {

    this.getVisitId = this.dataService.getVisitId();

    this.subscription = this.myVisitsvc.getVisitIdAndDates(this.customerDetails.nameid).subscribe((data) => {
      if (this.getVisitId) {
        this.reloadVisitDetails(this.getVisitId);
      } else {
        this.reloadVisitDetails(data[0].visitId);
      }
      this.reloadCurrentStage(data[0].currentStage);
    });
    console.log(this.visitIdAnddatesArray);
  }

  reloadVisitDetails(newvisitId) {
    this.visitId = newvisitId;
    // this.reloadSessioncomponent();
  }
  reloadCurrentStage(currentStage) {
    console.log(currentStage);
    this.stage = currentStage;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  // reloadSessioncomponent(){
  //   this.sessionCmpt.reloadsession();
  // }

}
