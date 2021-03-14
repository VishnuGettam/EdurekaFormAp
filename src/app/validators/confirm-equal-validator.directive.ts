import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidationErrors, FormGroup } from '@angular/forms';
import { ConfirmEqual } from './confirm-equal-validator'

@Directive({
  selector: '[appConfirmEqualValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ConfirmEqualValidatorDirective, multi: true }]
})
export class ConfirmEqualValidatorDirective {

  constructor() { }

  @Input('appConfirmEqualValidator') appConfirmEqualValidator: string[] = [];

  validate(formGroup: FormGroup): ValidationErrors {
      return ConfirmEqual(this.appConfirmEqualValidator[0], this.appConfirmEqualValidator[1])(formGroup)!;
  }
}
