import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appToggle]'
})
export class ToggleDirective {

  constructor() { }

  @HostBinding('class.selected')
  private hostSelected = false;

  @HostListener('click')
  private onClick() {
    this.hostSelected = !this.hostSelected;
  }
}
