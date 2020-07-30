import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MyvisitService } from 'src/app/services/myvisit.service';
import { NgxSpinnerService } from 'ngx-spinner';
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
  constructor(private myVisitsvc: MyvisitService,
    private spinner:NgxSpinnerService) { }

  ngOnInit() {
    this.customerDetails = JSON.parse(localStorage.getItem('customerDetails'));
    this.getVisitDates();
    console.log(this.visitIdAnddatesArray);

  }
  ngOnChanges(){
    this.getVisitDates();
  }
  getVisitDates() {
    // this.spinner.show();
        this.myVisitsvc.getVisitIdAndDates(this.customerDetails.nameid).subscribe((data) => {
      this.visitIdAnddatesArray = data;

    });
    // this.spinner.hide();
    console.log(this.visitIdAnddatesArray);


  }
  sendVisitId(visitId) {
    this.parentcustomer.emit(visitId);
  }


}
