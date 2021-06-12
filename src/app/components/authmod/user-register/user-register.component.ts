import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  registerFormGroup:any
  ngOnInit(): void {
    this.setRegisterForm();
  }

  setRegisterForm(){
    this.registerFormGroup = this.fb.group({
      emailCtrl:['', [Validators.required,Validators.pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')]],
      fnameCtrl:['', Validators.required],
      lastNameCtrl:['', Validators.required],
      cityCtrl:['', Validators.required],
      passwordCtrl:['', Validators.required],
      confirmpasswordCtrl:['', Validators.required],
    },{validator: this.checkIfMatchingPasswords('passwordCtrl', 'confirmpasswordCtrl')})
  }


  checkIfMatchingPasswords(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      // console.log(controlName, matchingControlName)
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ confirmPasswordMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}
}
