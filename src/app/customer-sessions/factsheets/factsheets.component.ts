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
    cities:any;

  ngOnInit() {
  }
// factsheets(){
//   this.factSheetsIns.getFactsheets(this.visitId).subscribe((data)=>{
//     this.cities
//   })
// }
}
