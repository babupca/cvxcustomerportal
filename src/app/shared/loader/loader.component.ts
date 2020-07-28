import { Component, OnInit } from '@angular/core';
import { LoaderservicecircleService } from './loaderservicecircle.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  constructor(public loader:LoaderservicecircleService) { }

  ngOnInit() {
  }

}
