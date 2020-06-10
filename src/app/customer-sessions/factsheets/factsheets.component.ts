import { Component, OnInit, Input } from '@angular/core';
import { FactsheetsService} from 'src/app/services/factsheets.service'


@Component({
  selector: 'app-factsheets',
  templateUrl: './factsheets.component.html',
  styleUrls: ['./factsheets.component.css']
})
export class FactsheetsComponent implements OnInit {
//  @Input visitId();
  constructor(private factSheetsIns: FactsheetsService) { }
    cities:any;
  ngOnInit() {
  }
factsheets(){
  this.factSheetsIns.getFactsheets().subscribe((data)=>{
    this.cities
  })
}
}
