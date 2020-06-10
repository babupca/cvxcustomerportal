import { Injectable, Input } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class FactsheetsService {
  private customerApi = environment.API_URL;
  constructor(private httpClient: HttpClient) { }
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key': environment.API_URL_KEY
    })

  }
  getFactsheets(visitId){
    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'Ocp-Apim-Subscription-Key': environment.API_URL_KEY
    // })
    // let options = new HttpResponse({
    //   headers, responseType: ResponseContentType.Blob,
    // });
    // return this.httpClient.get(this.customerApi+'/api/Operations/GetFactSheet?VisitId='+visitId,hoptions);
  }
}
