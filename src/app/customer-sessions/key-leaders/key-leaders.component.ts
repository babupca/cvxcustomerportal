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
  ngOnChanges(){
    this.keyLeaders();
  }
  // this.visitId
  keyLeaders() {
    if(this.visitId){
    this.keyleaders.getdxcKeyLeaders(this.visitId).subscribe((data) => {
      console.log(data);
      this.keyLeadersArray = data;
    });
  }
  }
}
