import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { finalize, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BannercustomerService {
  private customerAPI = environment.API_URL;

  constructor(private httpClient: HttpClient) { }

  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key': environment.API_URL_KEY
    })
  }

  getBannerData() {
    return this.httpClient.get(this.customerAPI + '/api/Banner/BannerContent', this.httpOptions);
  }

  getAccountLogoForAccountId(accountId) {
    return this.httpClient.get(this.customerAPI + '/api/Operations/GetAccountLogoForAccountId?accountId=' + accountId, this.httpOptions);

  }

}
