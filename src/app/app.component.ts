import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jobHubWebPortal';
  supportLanguages = ['en','sin','ta']
  constructor(private translate: TranslateService){
  this.translate.addLangs(this.supportLanguages)
  this.translate.setDefaultLang('en');

  // const browser = this.translate.getBrowserLang()
  // this.translate.use(browser)

  }
}
