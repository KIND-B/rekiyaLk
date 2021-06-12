import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.scss']
})
export class HeadersComponent implements OnInit {
  supportLanguages = ['en','sin','ta']
  constructor(private translateService:TranslateService) {
    // this.translateService.addLangs(this.supportLanguages)
    // this.translateService.setDefaultLang('ta');

    // const browser = this.translateService.getBrowserLang()
    // this.translateService.use(browser)
   }

  ngOnInit(): void {
  }

  changeLanguage(event:any){

let lang = event.target.value
this.translateService.use(lang)
  }

}
