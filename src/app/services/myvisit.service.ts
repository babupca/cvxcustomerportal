import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { NgxSpinnerService } from 'ngx-spinner';
import { map, finalize } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class MyvisitService {

  private customerApi = environment.API_URL;
  constructor(private httpClient: HttpClient,
    private spinner: NgxSpinnerService) { }
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key': environment.API_URL_KEY
    })

  }
  getVisitIdAndDates(CustomerId) {
    return this.httpClient.get(this.customerApi + '/api/customer/' + CustomerId + '/MyVisitsListForaCustomer', this.httpOptions).pipe(map(result => result), finalize(() => {
    }));
  }

  getVisitInformationBasedOnvisitID(CustomerId, visitId) {
    return this.httpClient.get(this.customerApi + '/api/customer/' + CustomerId + '/GetVisitInformationBasedOnVisitID?visitID=' + visitId, this.httpOptions).pipe(map(result => result), finalize(() => {
    }));
  }
}
