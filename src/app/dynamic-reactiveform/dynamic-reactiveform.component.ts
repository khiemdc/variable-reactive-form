import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'dynamic-reactiveform',
  templateUrl: './dynamic-reactiveform.component.html',
  styleUrls: ['./dynamic-reactiveform.component.css']
})
export class DynamicReactiveformComponent implements OnInit {
  dynamicForm: FormGroup;
  fieldName = 'age';
  fieldValue = '32';
  constructor() { }

  ngOnInit() {
    this.dynamicForm = new FormGroup({
      [this.fieldName]: new FormControl(this.fieldValue)
    });
  }

}
