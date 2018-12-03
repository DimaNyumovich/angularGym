import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHigtlight]'
})

export class HigtlightDirective {

  constructor(private el: ElementRef) {
    // this.el.nativeElement.style.backgroundColor = 'gold';
  }

  @Input('appHigtlight') highlightColor: string;
  @Input() defaultColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || this.defaultColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}


