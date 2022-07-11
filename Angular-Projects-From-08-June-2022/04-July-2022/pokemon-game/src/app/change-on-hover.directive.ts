import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeOnHover]'
})
export class ChangeOnHoverDirective {

  constructor() { }

  @HostBinding('style.color') color!: string;
  @HostBinding('style.backgroundColor') bgColor!: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.color = '#3f51b5';
    this.bgColor = '#ccc';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.color = '#fff';
    this.bgColor = '#3f51b5';
  }

}
