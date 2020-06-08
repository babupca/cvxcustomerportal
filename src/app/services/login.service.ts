import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private customerAPI = environment.API_URL;  

  constructor(private httpClient: HttpClient) { }

  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key': environment.API_URL_KEY
    })
  }

  customerLogin(customerObj:customerLoginSchema){
    return this.httpClient.post(this.customerAPI+'/api/Auth/login', customerObj , this.httpOptions);
  }
}

interface customerLoginSchema {
  userName:string;
  password:string;
}