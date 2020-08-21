import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VisitPocService {
  private customerApi = environment.API_URL;

  constructor(private http: HttpClient) { }
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key': environment.API_URL_KEY
    })
  }
  
  assignedPOC(customerId,visitId){
    return this.http.get(this.customerApi+'/api/customer/'+customerId+'/AssignedPOCsOfVisit/'+visitId,this.httpOptions);
  }
}
