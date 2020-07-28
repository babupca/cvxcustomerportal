import { Injectable } from '@angular/core';
import {  HttpClient, HttpHeaders,  HttpParams, HttpResponse,HttpRequest, } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { Observable, from } from 'rxjs';
import { retry, catchError, map, tap, finalize } from 'rxjs/operators';
import {  RequestOptions, ResponseContentType, Headers } from '@angular/http';
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


  // public headers = new Headers({
  //   'Content-Type': 'application/json',
  //   'Ocp-Apim-Subscription-Key': environment.API_URL_KEY
  // });

  // public options = new RequestOptions({ headers: this.headers });

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

  /**
   * download Agenda
   * @param visitId
   */

  getAgenda(visitId) {
    // const headers = new Headers({
    //   'Content-Type': 'application/json',
    //   'Ocp-Apim-Subscription-Key': environment.API_URL_KEY
    // })
    //  let options = new RequestOptions({
    //   headers, responseType: ResponseContentType.Blob,
    // });
    // let headers = new HttpHeaders({
    //   "Content-Type": "application/octet-stream",
    //   Accept: "application/octet-stream",
    //   "Ocp-Apim-Subscription-Key": environment.API_URL_KEY,
    // });

    // let option = {
    //   headers: headers,
    //   // responseType:Blob
    // };
    const options = {
      headers: new HttpHeaders({
        "Content-Type": "application/octet-stream",
        Accept: "application/json",
        "Ocp-Apim-Subscription-Key": environment.API_URL_KEY,
      }),
      responseType: "blob" as "json",
      observe: "response" as "response",
    };

    // const headers = new Headers({
    //   "Content-Type": "application/json",
    //   "Ocp-Apim-Subscription-Key": environment.API_URL_KEY,
    // });
    // let options = new RequestOptions({
    //   headers,
    //   responseType: ResponseContentType.Blob,
    // });
    // return this.http.get(this.customerApi + '/DownloadAgenda?visitID='+ visitId,options).pipe(map(result=>result),finalize(()=>{
    // }));
    return this.http
      .get(this.customerApi + "/DownloadAgenda?VisitID=" + visitId, options)
      .pipe(
        map((result) => result),
        finalize(() => {})
      );
  }

}
