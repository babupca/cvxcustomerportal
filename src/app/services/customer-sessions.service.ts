import { Injectable } from '@angular/core';
import {  HttpClient, HttpHeaders,  HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { Observable } from 'rxjs';
import * as moment from 'moment';


@Injectable({
  providedIn: 'root'
})
export class CustomerSessionsService {

  private customerApi = environment.API_URL + '/api/Session';

  constructor(private http: HttpClient) { }

  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
       Accept:'application/json',
      'Ocp-Apim-Subscription-Key': environment.API_URL_KEY     
    })
  }

  addActionPoints(actionPointData){
    return this.http.post(this.customerApi+'/AddorUpdateActionPointToSession',actionPointData,this.httpOptions)
  }

  sendFeedBack(feedBackData){
    
    return this.http.post(this.customerApi+'/AddorUpdateFeedBackToSession',feedBackData,this.httpOptions)
  }

  sessionRatings(ratings){
    return this.http.post(this.customerApi+'/AddorUpdateRatingToSession',ratings,this.httpOptions)
  }

  getDaysBetweenDates(startDate, endDate) {
    var dates = [];

    var currDate = moment(startDate).startOf('day');
    var lastDate = moment(endDate).startOf('day');
    // Adding startdate in the array

    dates.push({ 'dateValue': moment(startDate).format("DD-MMM-YYYY"), 'dateString': moment(startDate).format("DD-MMM-YYYY") });

    while (currDate.add(1, 'days').diff(lastDate) < 0) {
      //dates.push(currDate.clone().toDate());
      dates.push({ 'dateValue': currDate.clone().format("DD-MMM-YYYY"), 'dateString': currDate.clone().format("DD-MMM-YYYY") });
    }

    if (startDate < endDate) {
      //dates.push(moment(endDate).toDate());
      dates.push({ 'dateValue': moment(endDate).format("DD-MMM-YYYY"), 'dateString': moment(endDate).format("DD-MMM-YYYY") });
    }
    console.log(dates);
    return dates;
  }

  getCities(visitId) {

    return this.http.get(this.customerApi + '/GetVisitCitiesbyVisitId?visitId=' + visitId, this.httpOptions);
  }

  getSessions(visitId, sessionData) {
    return this.http.post(this.customerApi + '/GetCustomerInflightSessions?visitId='+visitId, sessionData, this.httpOptions);
  }

    /**
   * getSessionFeedBackBySessionID
   * @param vid - visit id
   * @param date - current date
   */
  FetchDateHavingUpomingSessions(vid:string, date:string){
    return this.http.get(this.customerApi+'/FetchDateHavingUpomingSessions?visitID='+vid+'&currentDate='+date,this.httpOptions);
  }

  
}
