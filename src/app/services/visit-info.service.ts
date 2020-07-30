import { Injectable } from '@angular/core';
import {  HttpClient, HttpHeaders,  HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { Observable } from 'rxjs';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class VisitInfoService {

  private customerApi = environment.API_URL + '/api/Session';

  constructor(private http: HttpClient) { }

  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
       Accept:'application/json',
      'Ocp-Apim-Subscription-Key': environment.API_URL_KEY     
    })
  }

  getVisitInfo(visitID){
    return this.http.get(this.customerApi+'/GetVisitCitiesByVisitId?visitID='+visitID,this.httpOptions)
  }
}
