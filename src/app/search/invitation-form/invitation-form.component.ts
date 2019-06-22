import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'invitation-form',
  templateUrl: './invitation-form.component.html',
  styleUrls: ['./invitation-form.component.css']
})
export class InvitationFormComponent implements OnInit {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      invitationId: ['', Validators.minLength(11)],
      referenceId: ['', Validators.minLength(10)],
      loanNumber: ['', Validators.minLength(5)]
    },
      {
        validator: this.crossFieldValidator
      }
    );
  }

  crossFieldValidator(form: FormGroup) {
    return form.controls.invitationId.value === '' &&
      form.controls.referenceId.value === '' &&
      form.controls.loanNumber.value === '' ?
      { validationError: true } : null;
  }

  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid);
    console.log(JSON.stringify(form.value));
  }
}
