import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MyvisitService } from 'src/app/services/myvisit.service';
@Component({
  selector: 'app-my-visits',
  templateUrl: './my-visits.component.html',
  styleUrls: ['./my-visits.component.css']
})
export class MyVisitsComponent implements OnInit {
  visitId: any;
  visitIdAnddatesArray: any;
  customerDetails: any;
  @Output() parentcustomer = new EventEmitter<object>();
  constructor(private myVisitsvc: MyvisitService) { }

  ngOnInit() {
    this.customerDetails = JSON.parse(localStorage.getItem('customerDetails'));
    this.getVisitDates();
    console.log(this.visitIdAnddatesArray);

  }
  ngOnChanges(){
    this.getVisitDates();
  }
  getVisitDates() {

    this.myVisitsvc.getVisitIdAndDates(this.customerDetails.nameid).subscribe((data) => {
      this.visitIdAnddatesArray = data;
    });
    console.log(this.visitIdAnddatesArray);


  }
  sendVisitId(visitId) {
    this.parentcustomer.emit(visitId);
  }


}
