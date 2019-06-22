import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'phone-form',
  templateUrl: './phone-form.component.html',
  styleUrls: ['./phone-form.component.css']
})
export class PhoneFormComponent implements OnInit {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      phone: ['', Validators.minLength(10)],
      email: ['', Validators.email]
    },
      {
        validator: this.crossFieldValidator
      }
    );
  }

  crossFieldValidator(form: FormGroup) {
    return form.controls.email.value === '' &&
      form.controls.phone.value === '' ?
      { validationError: true } : null;
  }

  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid);
    console.log(JSON.stringify(form.value));
  }
}
