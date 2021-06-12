import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  supportLanguages = ['en','sin','ta']
  constructor(private  fb:FormBuilder,private translateService:TranslateService) {
    this.translateService.addLangs(this.supportLanguages)
    this.translateService.setDefaultLang('en');

   }
  loginFormGroup:any
  ngOnInit(): void {
    this.setUserLoginForm();
  }


  setUserLoginForm(){
    this.loginFormGroup = this.fb.group({
        usernameCtrl:['', [Validators.required,
        Validators.pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')]],
      passwordCtrl:['', Validators.required]
    })
  }



}
