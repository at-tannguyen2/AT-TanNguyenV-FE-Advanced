import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { parse } from 'querystring';

@Directive({
  selector: '[appToggeFavourite]'
})
export class ToggeFavouriteDirective {
  @Input() product: any;
  constructor(private el: ElementRef) {
  }

  @HostListener('click', ['$event.target']) onClick(el: any) {
    if (el.nodeName === 'I') {
      this.product.isActive = !this.product.isActive;
      this.product.isActive ? this.product.amount += 1 : this.product.amount -= 1;
    }
  }
}
