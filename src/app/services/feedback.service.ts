import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private customerApi = environment.API_URL;
  constructor(private httpClient: HttpClient
    ) { }
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key': environment.API_URL_KEY
    })

  }

  getFeedback(visitId,customerId){
    return this.httpClient.get(this.customerApi+'/api/FeedBack?visitID='+visitId + "&customerID=" +customerId,this.httpOptions);
  }

  sendFeedback(feedbackData){
    return this.httpClient.post(this.customerApi+'/api/FeedBackthis',feedbackData.httpOptions);
  }
}
