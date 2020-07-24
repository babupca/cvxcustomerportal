import { Component, forwardRef, HostBinding, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'dxc-rating',
  template: '<input [(ngModel)]="value" /> local: {{val}}',
  styles: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DxcRatingComponent),
      multi: true
    }
  ]
})
export class DxcRatingComponent  {
  constructor(){}
}