import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  isChangePasswordRequest: boolean = false;
  constructor(private activatedRoute:ActivatedRoute,
    private route:Router) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      console.log(params);
      const getId = parseInt(params.get('id'));
      if(getId && getId === 2){
         this.isChangePasswordRequest = true;  
      }else{
        if(getId === 1) {
          this.isChangePasswordRequest = false;
        }else {
          this.route.navigateByUrl('/**');
        }
      }
    });
  }

}
