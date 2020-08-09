import { Component, OnInit, Input } from '@angular/core';
import { NgbPopoverConfig } from '@ng-bootstrap/ng-bootstrap';
import { VisitPocService} from 'src/app/services/visit-poc.service'


@Component({
  selector: 'app-visit-poc',
  templateUrl: './visit-poc.component.html',
  styleUrls: ['./visit-poc.component.css']
})
export class VisitPocComponent implements OnInit {

  @Input() visitId:any;
  customerDetails: any;
  managers:any;
  managerDetails:any;
  constructor( private visitPoc: VisitPocService) { }

  ngOnInit() {
    this.customerDetails = JSON.parse(localStorage.getItem('customerDetails'));
    console.log(this.customerDetails);
    this.visitManagers();
  }
  ngOnChanges(){
    this.visitManagers();
    
  }

  visitManagers(){
    if(this.visitId){
    this.visitPoc.assignedPOC(this.customerDetails.nameid,this.visitId).subscribe((data)=>{
      console.log(data);
      this.managers = data;
    });
  }
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
