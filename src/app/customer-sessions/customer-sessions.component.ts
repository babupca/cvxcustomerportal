import { Component, OnInit, Input, ViewChild, SimpleChanges } from '@angular/core';
import { SessionsComponent} from 'src/app/customer-sessions/sessions/sessions.component';
import { MyvisitService} from 'src/app/services/myvisit.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-customer-sessions',
  templateUrl: './customer-sessions.component.html',
  styleUrls: ['./customer-sessions.component.css']
})

export class CustomerSessionsComponent implements OnInit {
  customerDetails:any;
  visitId:string;
  visitInfo: any;
  stage:string;
  visitIdAnddatesArray:any;
  constructor(private myVisitsvc:MyvisitService,
    private spinner:NgxSpinnerService) { }
  ngOnInit() {
    this.customerDetails = JSON.parse(localStorage.getItem('customerDetails'));
    this.loadFirstVisit();

  }




  loadFirstVisit(){
    // this.spinner.show();
    this.myVisitsvc.getVisitIdAndDates(this.customerDetails.nameid).subscribe((data)=>{

      console.log(data[0].visitId);
      this.reloadVisitDetails(data[0].visitId);
      this.reloadCurrentStage(data[0].currentStage);
      });
      // this.spinner.hide();
      console.log(this.visitIdAnddatesArray);

  }

  reloadVisitDetails(newvisitId){
    this.visitId = newvisitId;
    // this.reloadSessioncomponent();
  }
  reloadCurrentStage(currentStage){
    console.log(currentStage);
    this.stage = currentStage;
  }


  // reloadSessioncomponent(){
  //   this.sessionCmpt.reloadsession();
  // }

}
