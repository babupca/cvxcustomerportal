import { Component, OnInit } from '@angular/core';
import { NgbPopoverConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-visit-poc',
  templateUrl: './visit-poc.component.html',
  styleUrls: ['./visit-poc.component.css']
})
export class VisitPocComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showUserDetails(popover ) {
    if (popover.isOpen()) {
      popover.close();
    } else {
      popover.open();
    }
  }

}
