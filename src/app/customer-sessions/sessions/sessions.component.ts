import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import * as moment from 'moment';
import { saveAs } from 'file-saver';
import { Subscription } from 'rxjs';
import { CustomerSessionsService } from 'src/app/services/customer-sessions.service';
import { HttpHeaders } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css']
})
export class SessionsComponent implements OnInit {


  visitInfo: any;
  visitDates: any;
  visitCity: any;
  visitDate: any;
  sessions: any;
  getDate: any;
  sessionTime: any;
  sessionData: any;
  info: any;
  sessiondata: any;
  sessionState = [];
  userDetails: any;
  todaydate: any;
  sessionInfo: any;
  control: any;
  subscription: Subscription;
  saved = false;
  customerDetails: any;
  @Input() visitId:any;

  constructor(private sessionService: CustomerSessionsService,
    private spinner: NgxSpinnerService,
    public changeDetecref: ChangeDetectorRef) { }

  ngOnInit() {
    this.customerDetails = JSON.parse(localStorage.getItem('customerDetails'));
    // this.getVisitCitiesAndDates();
    console.log(this.visitId);
   // this.getSessionState();
    this.todaydate = this.getTodayDate();
  }
  reloadsession(){
    // console.log(this.visitId);
    this.getVisitCitiesAndDates();
  }
  ngOnChanges(){
    this.reloadsession();
  }
  getTodayDate(){
    var today = moment();
    return this.todaydate = moment(today).format('YYYY-MM-DD')

  }
  getVisitCitiesAndDates() {
    this.visitDates = [];
    this.visitDate = null;
    this.visitCity = null;
    if(this.visitId){
     
    this.sessionService.getCities(this.visitId).subscribe(data => {
      console.log(data);
      this.visitInfo = data;
      console.log(this.visitInfo);
      this.visitInfo.forEach(element => {
        element['visitDates'] = this.sessionService.getDaysBetweenDates(element.startDate, element.endDate);
        console.log(element['visitDates']);
      });
      this.visitDates = this.visitInfo[0].visitDates;
      this.visitCity = this.visitInfo[0].location;
      this.visitDate = this.visitDates[0].dateValue;
      this.changeDetecref.detectChanges();
      this.info = this.visitInfo.find(data => {
        return this.visitCity === data.location

      });
       
      var dateFlag = false;
      this.visitInfo.forEach(data => {
        if (dateFlag !== true) {
          console.log(data);
          var todayDates = data.visitDates.filter(dates => {
            return dates.dateValue === moment().format('DD-MMM-YYYY')
          });
          console.log("todayDates", todayDates)
          if (todayDates.length > 0) {
            dateFlag = true;
            this.visitCity = data.location;
            this.visitDates = data.visitDates;

            this.visitDate = todayDates[0].dateValue;
            this.changeDetecref.detectChanges();
            this.info = this.visitInfo.find(data => {
              return this.visitCity === data.location

            });
            this.getsessions();
            //this.getSessionState();
            console.log(this.visitDate);
          }
        }
      });
      console.log(this.visitDate);
      this.getFetchDateHavingUpomingSessions()
      this.getsessions();
      //this.getSessionState();
      console.log(this.visitDate);
      // this.visitCity = this.visitInfo[0]
    });
    
  }
  }
  dateFormat() {
    return moment(this.visitDate).format('YYYY-MM-DD');
  }

  dataChanged(event) {
    console.log(event);
    console.log(this.visitCity);
    console.log(this.visitDate);
    this.visitDate = event;
    this.info = this.visitInfo.find(data => {
      return this.visitCity === data.location
    });

    this.getsessions();
    //this.getSessionState();

  }
  cityChanged(event) {
    console.log(event);
    this.visitCity = event;
    console.log(this.visitCity);
    this.info = this.visitInfo.find(data => {
      return this.visitCity === data.location
    });
    this.visitDates = this.info.visitDates;
    this.visitDate = this.visitDates[0].dateValue;
    this.changeDetecref.detectChanges();
    this.getsessions();
    // this.getSessionState();
  }

  getsessions() {

    this.getDate = this.dateFormat();

    var sessionData = {
      'filteredDate': this.getDate + "T00:00:00.000Z",
      'cityID': this.info.locationId,
      'loggedinUserId': this.customerDetails.nameid
    }
    // this.spinner.show();
    this.sessionService.getSessions(this.visitId, sessionData).subscribe(data => {
      this.sessions = data;
      console.log(this.sessions);
      this.sessiondata = this.sessions['sessions'];
      console.log(this.sessiondata);

      // if(this.sessiondata.sessionState !== 'Upcoming' || this.sessiondata.length === 0){

      // }
      console.log(this.visitDate);
    });
    // this.spinner.hide();
    console.log(this.sessiondata);
    // this.visitDates=info.visitDates;
  }

  // getSessionState() {
  //   this.sessionService.getSessionState().subscribe((data) => {
  //     this.sessionState = JSON.parse(data['_body']);
  //     console.log(this.visitDate);
  //   })
  // }
  getFetchDateHavingUpomingSessions() {
    this.sessionService.FetchDateHavingUpomingSessions(this.visitId, this.todaydate).subscribe(data => {
      this.sessionInfo = data;
      console.log(this.sessionInfo);
      if (this.sessionInfo.city !== null) {
        this.visitCity = this.sessionInfo.city;
        this.info = this.visitInfo.find(data => {
          return this.visitCity === data.location

        });
        var index = this.visitInfo.findIndex(data => {
          return data.locationId === this.sessionInfo.cityID;
        });
        this.visitDates = this.visitInfo[index].visitDates;
        this.visitDate = moment(this.sessionInfo.upcomingDateWithValidSession).format('DD-MMM-YYYY');
        this.changeDetecref.detectChanges();
        // this.getVisitCitiesAndDates();
        this.getsessions();
        //this.getSessionState();
      }
      console.log(this.visitDate);
    })
  }

  reloadForm() {
    console.log(this.visitCity);
    console.log(this.visitDate);
    this.getVisitCitiesAndDates();

  }

  downloadAgenda() {
    
    this.subscription = this.sessionService
      .getAgenda(this.visitId)
      .subscribe((res) => {
        console.log("Res here: " + res);
        // let blob = new Blob([res.body], {
        //   type: "application/octet-stream",
        // });
        const contentDisposition = res.headers
          .get("Content-Disposition")
          .split("filename=")[1]
          .replace(/['"]+/g, "");
        const fileName = contentDisposition.split(";", 2);
        saveAs(res.body, fileName[0]);
        // this.saved = false;
        // saveAs(blob, fileName[0]);
        // this.saved = true;
        // if (this.saved) {
        // }
      });
      
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }


}
