import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  reactiveForm = new FormGroup({
    fullName: new FormControl('Vishnu'),
    email: new FormControl('vishnugettam@gmail.com'),
    address: new FormControl('Bangalore'),
    city: new FormControl('Bng'),
    phoneNumber: new FormControl('8073863689'),
    password: new FormControl('Vishnu@G'),
    confirmpassword: new FormControl('Vishnu@G'),
  });
  displayData:boolean = false;

  constructor() {}

  ngOnInit(): void {}

  SubmitForm(){
    this.displayData=true;
  }
}
