import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';
import { VisitInfoService } from 'src/app/services/visit-info.service';
@Component({
  selector: 'app-visit-info',
  templateUrl: './visit-info.component.html',
  styleUrls: ['./visit-info.component.css']
})
export class VisitInfoComponent implements OnInit {

  @Input() visitId: any 
  visitInfo:any;
  constructor(private visitInfoService: VisitInfoService) { }

  ngOnInit() {
    this.getVisitInfo();
  }
 

  ngOnChanges(){
    this.getVisitInfo();
    console.log("Visit Info: "+JSON.stringify(this.visitInfo));
  }
  getVisitInfo(){
    if(this.visitId){
      this.visitInfoService.getVisitInfo(this.visitId).subscribe(data =>{
        this.visitInfo = data;
      });
    }
    
  }

}
