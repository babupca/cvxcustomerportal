import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-customer-sessions',
  templateUrl: './customer-sessions.component.html',
  styleUrls: ['./customer-sessions.component.css']
})
export class CustomerSessionsComponent implements OnInit {
  @Input() visitId:any;

  constructor() { }

  ngOnInit() {
  }

}
