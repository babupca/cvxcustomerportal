import { Injectable } from '@angular/core';
import {  HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class CustomerSessionsService {

  private customerApi = environment.API_URL + '/api/Session';

  constructor(private http: HttpClient) { }

  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key': environment.API_URL_KEY
    })
  }
  
  addActionPoints(actionPointData){
    return this.http.post(this.customerApi+'/AddorUpdateActionPointToSession',actionPointData,this.httpOptions)
  }

  sendFeedBack(feedBackData){
    return this.http.post(this.customerApi+'/AddorUpdateFeedBackToSession',feedBackData,this.httpOptions)
  }
}
