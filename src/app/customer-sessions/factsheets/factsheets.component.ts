import { Component, OnInit, Input } from '@angular/core';
import { FactsheetsService} from 'src/app/services/factsheets.service'


@Component({
  selector: 'app-factsheets',
  templateUrl: './factsheets.component.html',
  styleUrls: ['./factsheets.component.css']
})

export class FactsheetsComponent implements OnInit {
  constructor(private factSheetsIns: FactsheetsService) { }
  @Input() visitId:any;
    factsheetsArray:any;

  ngOnInit() {
    this.factsheets();
  }
factsheets(){
  this.factSheetsIns.getFactsheets("0528F473-6C3F-4CEA-9277-8067E178F6F1").subscribe((data)=>{
    this.factsheetsArray = data;
  })
}
}
