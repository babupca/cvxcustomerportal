import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { RatingModule } from "ngx-bootstrap/rating";
import { PopoverModule } from "ngx-bootstrap/popover";
import { NgxSpinnerModule, NgxSpinnerService } from "ngx-spinner";
import { AngularEditorModule } from "@kolkov/angular-editor";
import {
  PerfectScrollbarModule,
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface,
} from "ngx-perfect-scrollbar";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CustomerLoginComponent } from "./customer-login/customer-login.component";
import { CustomerHeaderComponent } from "./customer-header/customer-header.component";
import { CustomerFooterComponent } from "./customer-footer/customer-footer.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CustomerBannerComponent } from "./customer-banner/customer-banner.component";
import { CustomerSessionsComponent } from "./customer-sessions/customer-sessions.component";
import { MasterLayoutComponent } from "./shared/master-layout/master-layout.component";
import { SessionsComponent } from "./customer-sessions/sessions/sessions.component";
import { FactsheetsComponent } from "./customer-sessions/factsheets/factsheets.component";
import { DaysCountComponent } from "./customer-sessions/days-count/days-count.component";
import { MyVisitsComponent } from "./customer-sessions/my-visits/my-visits.component";
import { VisitInfoComponent } from "./customer-sessions/visit-info/visit-info.component";
import { KeyLeadersComponent } from "./customer-sessions/key-leaders/key-leaders.component";
import { LoaderInterceptorService } from "../app/services/Interceptor/loader-interceptor.service";
import { VisitPocComponent } from "./customer-sessions/visit-poc/visit-poc.component";
import { SessionItemComponent } from "./customer-sessions/sessions/session-item/session-item.component";
import { CustomerFeedbackComponent } from "./customer-feedback/customer-feedback.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { TruncatePipePipe } from "./pipes/truncate-pipe.pipe";
import { ModalModule } from "ngx-bootstrap/modal";
import { DxcRatingComponent } from "./services/dxc-rating.component";
import { StickyDirective } from "./services/sticky.directive";
import { LoaderComponent } from "./shared/loader/loader.component";
import { LoaderservicecircleService } from "./shared/loader/loaderservicecircle.service";
import { JwtModule } from "@auth0/angular-jwt";
import { NgIdleKeepaliveModule } from "@ng-idle/keepalive";

@NgModule({
  declarations: [
    AppComponent,
    CustomerLoginComponent,
    CustomerHeaderComponent,
    CustomerFooterComponent,
    ForgotPasswordComponent,
    CustomerBannerComponent,
    CustomerSessionsComponent,
    MasterLayoutComponent,
    SessionsComponent,
    FactsheetsComponent,
    DaysCountComponent,
    MyVisitsComponent,
    VisitInfoComponent,
    KeyLeadersComponent,
    VisitPocComponent,
    SessionItemComponent,
    CustomerFeedbackComponent,
    PageNotFoundComponent,
    TruncatePipePipe,
    DxcRatingComponent,
    StickyDirective,
    LoaderComponent,
    // FeedbackComponent
  ],
  imports: [
    NgIdleKeepaliveModule.forRoot(),
    JwtModule.forRoot({
      config: {},
    }),
    BrowserModule,
    HttpClientModule,
    NgxSpinnerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularEditorModule,
    PerfectScrollbarModule,
    RatingModule.forRoot(),
    PopoverModule.forRoot(),
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NoopAnimationsModule,
  ],
  providers: [
    NgxSpinnerService,
    LoaderservicecircleService,
    // {
    //   provide: PERFECT_SCROLLBAR_CONFIG,
    //   useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    // },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptorService,
      multi: true,
    },
    LoaderservicecircleService,
    HttpClientModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
