import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-visit-info',
  templateUrl: './visit-info.component.html',
  styleUrls: ['./visit-info.component.css']
})
export class VisitInfoComponent implements OnInit {

  @Input() visitInfo: any 
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    console.log("Visit Info: "+JSON.stringify(this.visitInfo))
  }

}
