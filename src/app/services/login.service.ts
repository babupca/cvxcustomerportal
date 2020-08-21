import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map, finalize } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private customerAPI = environment.API_URL;  

  constructor(private httpClient: HttpClient,private spinner: NgxSpinnerService) { }

  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key': environment.API_URL_KEY
    })
  }

  customerLogin(customerObj:customerLoginSchema){
    this.spinner.show()
    return this.httpClient.post(this.customerAPI+'/api/Auth/login', customerObj , this.httpOptions).pipe(
      map((result) => result),
      finalize(() => {
    this.spinner.hide();
        
      })
    );
  }
}

interface customerLoginSchema {
  userName:string;
  password:string;
}