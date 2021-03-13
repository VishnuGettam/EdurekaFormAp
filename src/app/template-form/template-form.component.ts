import { User } from './../User';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css'],
})
export class TemplateFormComponent implements OnInit {
  constructor() {
    // this.myUserData = {
    //   FullName: 'Vishnu',
    //   Email: 'vishnugettam@gmail.com',
    //   PhoneNumber: '8073863689',
    //   Password: '',
    //   ConfirmPassword: '',
    // };
  }

  // @ViewChild('userFormData') courseForm: NgForm;
  //myUserData: User;
  displayData: boolean = false;

  ngOnInit(): void {}

  onSubmit(myformData: NgForm) {
    this.displayData = true;
  }

  // OnClear(myformData: NgForm) {
  //   myformData.reset();
  //   this.displayData = false;

  // }
}
