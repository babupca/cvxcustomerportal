import { Component, ViewChild, ElementRef } from "@angular/core";

import { Location } from "@angular/common";
import { Router } from "@angular/router";

import { Idle, DEFAULT_INTERRUPTSOURCES } from "@ng-idle/core";
import { Keepalive } from "@ng-idle/keepalive";
import { NgbModalRef, NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "cvxcustomerportal";

  @ViewChild("sessionExpiredModal", { static: false })
  sessionExpiredModal: ElementRef;
  idleState = "Not Started";
  timedOut = false;
  lastPing?: Date = null;
  modalRef1: NgbModalRef;

  constructor(
    private router: Router,
    private location: Location,
    private idle: Idle,
    private keepalive: Keepalive,
    private modalService: NgbModal
  ) {
    router.events.subscribe((val) => {
      console.log(`Location path: ${location.path()}`);
      if (location.path() === "/customerLogin") {
        this.idle.stop();
      } else {
        this.idle.watch();
      }
    });

    idle.setIdle(30600);
    idle.setTimeout(60);
    idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

    idle.onIdleEnd.subscribe(() => {
      console.log(this.idleState);
      this.reset();
    });

    idle.onTimeout.subscribe(() => {
      // this.adalservice.logout();
      this.modalRef1.close();
      localStorage.clear();
      this.router.navigateByUrl("/customerLogin");
      this.timedOut = true;
      console.log(this.idleState);
    });

    idle.onIdleStart.subscribe(() => {
      this.idleState = `You've gone idle!`;
      console.log(this.idleState);
      this.modalRef1 = this.modalService.open(this.sessionExpiredModal);
      this.modalRef1.result.then((result) => {
        if (result === "Yes") {
          this.modalRef1.close();
          // window.location.reload();
          // this.adalservice.RenewToken("https://graph.microsoft.com");
          // this.adalservice
          //   .acquireToken("https://graph.microsoft.com")
          //   .subscribe((token) => {
          //     console.log("New Token: " + token);
          //     sessionStorage.setItem("adal.idtoken", token);
          //   });
        } else if (result === "No") {
          // this.adalservice.logout();
          localStorage.clear();
          this.router.navigateByUrl("/customerLogin");
        }
      });
    });

    idle.onTimeoutWarning.subscribe((countdown) => {
      this.idleState = `You'll be logged out in ${countdown} seconds!!!`;
      console.log(this.idleState);
    });

    keepalive.interval(15);
    keepalive.onPing.subscribe(() => (this.lastPing = new Date()));

    this.reset();
  }

  reset() {
    this.idle.watch();
    this.timedOut = false;
  }
}
