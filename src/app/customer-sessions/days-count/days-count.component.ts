import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';
import { DaysTogoService } from 'src/app/services/days-togo.service'

@Component({
  selector: 'app-days-count',
  templateUrl: './days-count.component.html',
  styleUrls: ['./days-count.component.css']
})
export class DaysCountComponent implements OnInit {

  constructor(private daysRemaining: DaysTogoService) { }
  @Input() visitId: any;
  numberOfDays: any;
  daysToGO: any;
  todaysdate: any;
  visitHappeningDate: any;

  ngOnInit() {
    this.getRemainingDays();
    this.todaysdate = this.gettodaysdate();
  }
  gettodaysdate() {
    var today = moment();
    return this.todaysdate = moment(today).format('YYYY-MM-DD');
  }
  ngOnChanges(){
    this.getRemainingDays();
  }

  getRemainingDays() {
    if(this.visitId){
    this.daysRemaining.getDaysToGo(this.visitId).subscribe((data) => {
      this.numberOfDays = data;
      this.visitHappeningDate = moment(this.numberOfDays).add(5, 'hours').add(30, 'minutes');
       this.daysToGO = this.visitHappeningDate.diff(this.todaysdate, 'days');
    });
  }

  }

}