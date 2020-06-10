import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css']
})
export class SessionsComponent implements OnInit {
  // @Input() visitId;
  // @Input() visitDetails: any;
  // @Output() updateSessionId=new EventEmitter<any>();
  // @Output() modeChange = new EventEmitter<any>();
  customerDetails:any;
  visitId:any;
  visitInfo: any;
  visitDates:any;
  visitCity:any;
  visitDate : any;
  sessions : any;
  getDate : any;
  sessionTime:any;
  sessionData:any;
  info:any;
  sessiondata:any;
  sessionState = [];
  userDetails:any;
  todaydate:any;
  sessionInfo:any;
  control:any;
  constructor() { }

  ngOnInit() {
    this.customerDetails = JSON.parse(localStorage.getItem('customerDetails'));
    this.visitId=this.customerDetails.OngoingVisitId;
    // this.getVisitCitiesAndDates();
    // this.getSessionState();
    // this.todaydate = this.getTodayDate();
  }
  // getTodayDate(){
  //   var today = moment();
  //   return this.todaydate = moment(today).format('YYYY-MM-DD')

  // }
//   getVisitCitiesAndDates() {
//     this.visitDates=[];
//     this.visitDate=null;
//     this.visitCity=null;
//     this.sessionService.getCities(this.visitId).subscribe(data => {
//       console.log(data);
//       this.visitInfo = JSON.parse(data['_body']);
//       this.visitInfo.forEach(element => {
//         element['visitDates'] = this.sessionService.getDaysBetweenDates(element.startDate,element.endDate);
//         console.log(element['visitDates']);
//       });
//       this.visitDates=this.visitInfo[0].visitDates;
//       this.visitCity=this.visitInfo[0].location;
//       this.visitDate=this.visitDates[0].dateValue;
//       this.changeDetecref.detectChanges();
//       this.info = this.visitInfo.find(data=>{
//         return this.visitCity === data.location

//       });
//       var dateFlag=false;
//       this.visitInfo.forEach(data=>{
//         if(dateFlag!==true){
//         console.log(data);
//         var todayDates=data.visitDates.filter(dates=>{
//         return dates.dateValue===moment().format('DD-MMM-YYYY')
//         });
//         console.log("todayDates",todayDates)
//         if(todayDates.length>0){
//           dateFlag=true;
//           this.visitCity = data.location;
//           this.visitDates = data.visitDates;

//           this.visitDate=todayDates[0].dateValue; 
//           this.changeDetecref.detectChanges();
//           this.info = this.visitInfo.find(data=>{
//             return this.visitCity === data.location
    
//           });     
//           this.getsessions();
//           this.getSessionState();
//           console.log(this.visitDate);
//         }
//       }
//       });
//       console.log(this.visitDate);
//       this.getFetchDateHavingUpomingSessions()
//       this.getsessions();
//       this.getSessionState();
// console.log(this.visitDate);
//       // this.visitCity = this.visitInfo[0]
//     })
//   }
  // dateFormat(){
  //   return moment(this.visitDate).format('YYYY-MM-DD');
  // }

  // dataChanged(event){
  //   console.log(event);
  //   console.log(this.visitCity);
  //   console.log(this.visitDate);
  //   this.visitDate=event;
  //   this.info = this.visitInfo.find(data=>{
  //     return this.visitCity === data.location
  //   });

  //   this.getsessions();
  //   this.getSessionState();

  // }
  // cityChanged(event){
  //   console.log(event);
  //   this.visitCity=event;
  //   console.log(this.visitCity);
  //   this.info = this.visitInfo.find(data=>{
  //     return this.visitCity === data.location
  //   });
  //   this.visitDates=this.info.visitDates;
  //   this.visitDate=this.visitDates[0].dateValue;
  //   this.changeDetecref.detectChanges();
  //   this.getsessions();
  //   this.getSessionState();
  // }

  // getsessions(){

  //   this.getDate = this.dateFormat();

  //   var sessionData={
  //     'filteredDate': this.getDate+"T00:00:00.000Z",
  //     'cityID': this.info.locationId,
  //     'loggedinUserId': this.userDetails.userID
  //   }
  //   this.sessionService.getSessions(this.visitId,sessionData).subscribe(data => {
  //     this.sessions = JSON.parse(data['_body']);
  //     this.sessiondata = this.sessions['sessions'];
  //     console.log(this.sessiondata);

  //     // if(this.sessiondata.sessionState !== 'Upcoming' || this.sessiondata.length === 0){

  //     // }
  //     console.log(this.visitDate);
  //   })
  //   console.log(this.sessiondata);
  //   // this.visitDates=info.visitDates;
  // }

  // getSessionState() {
  //   this.sessionService.getSessionState().subscribe((data) => {
  //     this.sessionState = JSON.parse(data['_body']);
  //     console.log(this.visitDate);
  //   })
  // }
  // getFetchDateHavingUpomingSessions(){
  //   this.sessionService.FetchDateHavingUpomingSessions(this.visitId,this.todaydate).subscribe(data =>{
  //     this.sessionInfo = JSON.parse(data['_body']);
  //     console.log(this.sessionInfo);
  //     if(this.sessionInfo.city !== null){
  //       this.visitCity = this.sessionInfo.city;
  //       this.info = this.visitInfo.find(data=>{
  //         return this.visitCity === data.location
  
  //       });
  //       var index=this.visitInfo.findIndex(data=>{
  //         return data.locationId===this.sessionInfo.cityID;
  //       });
  //       this.visitDates=this.visitInfo[index].visitDates;
  //         this.visitDate = moment(this.sessionInfo.upcomingDateWithValidSession).format('DD-MMM-YYYY');
  //         this.changeDetecref.detectChanges();
  //      // this.getVisitCitiesAndDates();
  //      this.getsessions();
  //      this.getSessionState();
  //     }
  //     console.log(this.visitDate);
  //   })
  // }

}
