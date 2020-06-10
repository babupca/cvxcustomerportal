import { Component, OnInit } from '@angular/core';
import { NgbPopoverConfig } from '@ng-bootstrap/ng-bootstrap';
import { VisitPocService} from 'src/app/services/visit-poc.service'


@Component({
  selector: 'app-visit-poc',
  templateUrl: './visit-poc.component.html',
  styleUrls: ['./visit-poc.component.css']
})
export class VisitPocComponent implements OnInit {

  loggedInUser = "3fa85f64-5717-4562-b3fc-2c963f66afa6";
  customerDetails: any;
  managers:"string";
  managerDetails:any;
  constructor( private visitPoc: VisitPocService) { }

  ngOnInit() {
    this.customerDetails = JSON.parse(localStorage.getItem('customerDetails'));
    console.log(this.customerDetails);
    this.visitManagers();
  }

  visitManagers(){
    this.visitPoc.assignedPOC(this.loggedInUser).subscribe((data)=>{
      console.log(data);

    })
  }

  showUserDetails(popover,obj ) {
    this.managerDetails = obj;
    if (popover.isOpen()) {
      popover.close();
    } else {
      popover.open();
    }
  }

}
