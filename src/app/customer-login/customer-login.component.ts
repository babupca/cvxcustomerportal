import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {
  FormBuilder,
  FormGroup,
  Validators,
  RequiredValidator,
  FormArray,
  FormControl,
} from "@angular/forms";
import { LoginService } from "../services/login.service";
import * as jwt_decode from "jwt-decode";
import { JwtHelperService } from "@auth0/angular-jwt";
@Component({
  selector: "app-customer-login",
  templateUrl: "./customer-login.component.html",
  styleUrls: ["./customer-login.component.css"],
})
export class CustomerLoginComponent implements OnInit {
  customerLogin: FormGroup;
  submitted: boolean = false;
  constructor(
    private helper: JwtHelperService,
    private route: Router,
    private _fb: FormBuilder,
    private loginServiceIns: LoginService
  ) {}
  //, Validators.pattern('(?=.*[A-Za-z])(?=.*[@$!%*#?&])[A-Za-z@$!%*#?&]{7,}?')
  ngOnInit() {
    this.customerLogin = this._fb.group({
      userName: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
    });
  }
  get f() {
    return this.customerLogin.controls;
  }

  loginSubmit() {
    this.submitted = true;
    console.log("this.customerLogin", this.customerLogin);
    if (this.customerLogin.valid) {
      this.loginServiceIns
        .customerLogin(this.customerLogin.value)
        .subscribe((data: any) => {
          // console.log(`token data: ${JSON.stringify(data)}`);
          let getToken = this.helper.decodeToken(data.tokenString);
          // console.log(
          //   `Token expiration: ${this.helper.getTokenExpirationDate(
          //     data.tokenString
          //   )}`
          // );
          // console.log(`Decoded token: ${JSON.stringify(getToken)}`);
          localStorage.setItem("customerDetails", JSON.stringify(getToken));
          console.log(
            `difference: ${
              (JSON.parse(localStorage.getItem("customerDetails")).exp -
                JSON.parse(localStorage.getItem("customerDetails")).iat) /
              3600
            }`
          );
          this.route.navigateByUrl("/customerSession");
        });
    }
  }
}
