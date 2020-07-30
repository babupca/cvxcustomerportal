import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { NgxSpinnerService } from 'ngx-spinner';
import { map, finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private customerApi = environment.API_URL;
  constructor(private httpClient: HttpClient,private spinner: NgxSpinnerService
    ) { }
  
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key': environment.API_URL_KEY
    })

  }

  getFeedback(visitId, customerId){
    this.spinner.show();
    return this.httpClient.get(this.customerApi+'/api/FeedBack?visitID='+visitId + "&customerID=" +customerId,this.httpOptions).pipe(
      map((result) => result),
      finalize(() => {
    this.spinner.hide();
        
      })
    );
  }

  sendFeedback(feedbackData){
    this.spinner.show();
    return this.httpClient.post(this.customerApi+'/api/FeedBack',feedbackData, this.httpOptions).pipe(
      map((result) => result),
      finalize(() => {
    this.spinner.hide();
        
      })
    );
  }
}
