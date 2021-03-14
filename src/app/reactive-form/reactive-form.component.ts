import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { MustMatch } from '../shared/passwordmatch.validator';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  reactiveForm: FormGroup;

  displayData: boolean = false;

  constructor(private _myreactiveForm: FormBuilder) {
    this.reactiveForm = this._myreactiveForm.group(
      {
        fullName: ['', Validators.required],
        email: [
          '',
          [
            Validators.required,
            Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
          ],
        ],
        address: ['', Validators.required],
        city: ['', Validators.required],
        phoneNumber: [
          '',
          [
            Validators.required,
            Validators.minLength(10),
            Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
          ],
        ],
        password: ['', Validators.required],
        confirmpassword: ['', [Validators.required]],
      },
      {
        validator: MustMatch('password', 'confirmpassword'),
      }
    );
  }

  ngOnInit(): void {}

  SubmitForm() {
    if (this.reactiveForm.valid) {
      this.displayData = true;
    }
    else{
      return;
    }
  }
}
