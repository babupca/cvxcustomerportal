import { Component, OnInit, Input } from '@angular/core';
import { KeyleadersService } from 'src/app/services/keyleaders.service';


@Component({
  selector: 'app-key-leaders',
  templateUrl: './key-leaders.component.html',
  styleUrls: ['./key-leaders.component.css']
})
export class KeyLeadersComponent implements OnInit {

  constructor(private keyleaders: KeyleadersService) { }
  @Input() visitId: any;
  keyLeadersArray: any;


  ngOnInit() {
  this.keyLeaders();
  }
  // this.visitId
  keyLeaders() {
    this.keyleaders.getdxcKeyLeaders("A4E6A048-5F1B-4FDA-A765-495B691A37B6").subscribe((data) => {
      console.log(data);
      this.keyLeadersArray = data;
    })
  }
}
