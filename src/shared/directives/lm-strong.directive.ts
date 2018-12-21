import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[formControlName][lmStrong]',
})
export class LmStrongDirective {

  constructor(public ngControl: NgControl) { }

  @HostListener('ngModelChange', ['$event'])
  onModelChange(event) {
    this.onInputChange(event);
  }

  onInputChange(event) {

    if( event.includes(":company:")) {

        let newVal = event.replace(':company:', ':<strong>company</strong>:');

        this.ngControl.valueAccessor.writeValue(newVal);
    }
  }
}
