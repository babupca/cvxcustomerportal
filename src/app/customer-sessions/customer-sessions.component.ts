import { Component, OnInit, Input } from '@angular/core';
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
  constructor(private visitInfoService: VisitInfoService) { }
  ngOnInit() {
    this.customerDetails = JSON.parse(localStorage.getItem('customerDetails'));
      this.visitId = this.customerDetails.OngoingVisitId
    
    var ongoingVisitId = this.customerDetails.OngoingVisitId;
    // console.log("On-Going Visit ID: "+JSON.stringify(ongoingVisitId))
    this.visitInfoService.getVisitInfo(ongoingVisitId).subscribe(data =>{
      this.visitInfo = data
    })
  }

}
