import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'reactive-form';
  productsForm: FormGroup;
  firstNameField = 'First Name';
  firstNameValue = 'test';
  lastNameField = 'Last Name';
  lastNameValue = '';

  constructor(private fb: FormBuilder) {}
  
  ngOnInit() {
    this.createForm();
  }

  public createForm() {
    this.productsForm = this.fb.group({
      [this.firstNameField]: new FormControl(this.firstNameValue),
      [this.lastNameField]: new FormControl(this.lastNameValue),
    });
  }

  
      
  
  showData() {
    console.log(this.productsForm.value);
  }

}
