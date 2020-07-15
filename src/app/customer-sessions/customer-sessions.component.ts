import { Component, OnInit, Input, ViewChild, SimpleChanges } from '@angular/core';
import { SessionsComponent} from 'src/app/customer-sessions/sessions/sessions.component';
import { MyvisitService} from 'src/app/services/myvisit.service';
import { VisitInfoService } from '../services/visit-info.service';
@Component({
  selector: 'app-customer-sessions',
  templateUrl: './customer-sessions.component.html',
  styleUrls: ['./customer-sessions.component.css']
})

export class CustomerSessionsComponent implements OnInit {
  customerDetails:any;
  visitId:string;
  visitInfo: any;
  visitIdAnddatesArray:any;
  constructor(private visitInfoService: VisitInfoService,private myVisitsvc:MyvisitService) { }
  ngOnInit() {
    this.customerDetails = JSON.parse(localStorage.getItem('customerDetails'));
    this.loadFirstVisit();
    this.getVisitInfo();
  }
  getVisitInfo(){
    this.visitInfoService.getVisitInfo(this.visitId).subscribe(data =>{
      this.visitInfo = data;
    });
  }
   
  
  
  loadFirstVisit(){
    this.myVisitsvc.getVisitIdAndDates(this.customerDetails.nameid).subscribe((data)=>{
      console.log(data[0].visitId);
      this.reloadVisitDetails(data[0].visitId);
      });
      console.log(this.visitIdAnddatesArray);
      
  }
  
  reloadVisitDetails(newvisitId){
    this.visitId = newvisitId;
    // this.reloadSessioncomponent();
  }
 

  // reloadSessioncomponent(){
  //   this.sessionCmpt.reloadsession();
  // }

}
