import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'name-form',
  templateUrl: './name-form.component.html',
  styleUrls: ['./name-form.component.css']
})
export class NameFormComponent implements OnInit {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      zip: ['', Validators.minLength(5)],
      dob: ['', Validators.minLength(8)]
    },
      {
        validator: this.crossFieldValidator
      }
    );
  }

  crossFieldValidator(form: FormGroup) {
    return form.controls.zip.value === '' &&
      form.controls.dob.value === '' ?
      { validationError: true } : null;
  }

  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid);
    console.log(JSON.stringify(form.value));
  }

}
