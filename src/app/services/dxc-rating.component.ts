import { Component, forwardRef, HostBinding, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import * as _ from "underscore";
@Component({
  selector: 'dxc-rating',
  template: `  
  <ul class="rating-container">
    <li class="feedback-emoji" *ngFor="let item of feedbackEmoji; let i=index;">       
        <span [class]="'icon-'+(i+1)" [ngClass]="{'active': item.active === true }" (click)="getCurrentStar(item)"></span>
    </li>
  </ul>
  <!--div><input [(ngModel)]="value" min="0" max="4" type="hidden" /></div-->
  `,
  styles: [`
  .feedback-emoji { padding: 0 0.75rem 0 0;}
  .rating-container { margin:0; padding:0; display: flex; flex-direction: row; list-style-type: none;}
  .icon-1 {
    background:transparent url('/assets/images/grey-1.svg') no-repeat left center;
    width: 41px; height: 41px;
    display:block;
  }
  .icon-1.active{
    background:transparent url('/assets/images/blue-1.svg') no-repeat left center;
  }
  .icon-2 {
    background:transparent url('/assets/images/grey-2.svg') no-repeat left center;
    width: 41px; height: 41px;
    display:block;
  }
  .icon-2.active{
    background:transparent url('/assets/images/blue-2.svg') no-repeat left center;
  }
  .icon-3 {
    background:transparent url('/assets/images/grey-3.svg') no-repeat left center;
    width: 41px; height: 41px;
    display:block;
  }
  .icon-3.active{
    background:transparent url('/assets/images/blue-3.svg') no-repeat left center;
  }
  .icon-4 {
    background:transparent url('/assets/images/grey-4.svg') no-repeat left center;
    width: 41px; height: 41px;
    display:block;
  }  
  .icon-4.active{
    background:transparent url('/assets/images/blue-4.svg') no-repeat left center;
  }
  `],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DxcRatingComponent),
      multi: true
    }
  ]
})
export class DxcRatingComponent {
  @Input() disabled = false;
  public feedbackEmoji =
  [
    {
      "id": 1,
      "image": "/assets/images/blue-1.svg",
      "active": false,
    },

    {
      "id": 2,
      "image": "/assets/images/grey-2.svg",
      "active": false
    },

    {
      "id": 3,
      "image": "/assets/images/grey-3.svg",
      "active": false
    },

    {
      "id": 4,
      "image": "/assets/images/grey-4.svg",
      "active": false
    }
  ];
  constructor() { }

  onChange: any = () => { }
  onTouch: any = () => { }
  val = ""

  set value(val) {
    if (val !== undefined && this.val !== val && this.val != null) {
      this.val = val;
      this.onChange(val);
      this.onTouch(val);      
      let checkVal = _.find(this.feedbackEmoji,(obj, i)=>{ 
        obj.active = false;
        if(obj.id === val){
          obj.active = !obj.active;
        }
      });
    }
  }

  writeValue(value: any) {
    if(value !== null){
      console.log("write value", value);
      this.value = value;
    }   
  }

  registerOnChange(fn: any) {
    console.log("registerOnChange ");
    this.onChange = fn
  }

  registerOnTouched(fn: any) {
    console.log("registerOnTouched ");
    this.onTouch = fn
  }

  getCurrentStar(i:object){
    console.log("getCurrentStar ");
    if (!this.disabled) {
      this.value = i['id'];
    }
  }
}