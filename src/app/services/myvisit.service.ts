import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class MyvisitService {

  private customerApi = environment.API_URL;
  constructor(private httpClient: HttpClient) { }
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key': environment.API_URL_KEY
    })

  }
  getVisitIdAndDates(CustomerId){
    
    return this.httpClient.get(this.customerApi+'/api/customer/'+CustomerId+'/MyVisitsListForaCustomer',this.httpOptions);
  }
}
