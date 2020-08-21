import { Directive, ElementRef, Input, HostListener, Renderer, HostBinding } from '@angular/core';

@Directive({
  selector: '[stickyMenu]'
})
export class StickyDirective {
  eleOffset:number;
  
  constructor(private el: ElementRef, renderer: Renderer) { }

  @Input('stickyMenu') highlightColor: string;

  @Input() elementId: string;

  @HostBinding('class.sticky-menu') isSticky = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event) {
      let getEle = document.getElementById(this.elementId);
      this.eleOffset = getEle.getBoundingClientRect().top;
      if(window.pageYOffset - 80 >= this.eleOffset) {
          this.isSticky = true;
      }else {
          this.isSticky = false;
      }
  }
}