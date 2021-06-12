import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { VacanciesDetailService } from 'src/app/services/vacancies-detail.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  supportLanguages = ['en','sin','ta']
  vacantDetail:Array<any> = []
  constructor(private translateService:TranslateService,private service:VacanciesDetailService) {
    this.translateService.addLangs(this.supportLanguages)
    this.translateService.setDefaultLang('en');

    const browser = this.translateService.getBrowserLang()
    this.translateService.use(browser)
  }

  ngOnInit(): void {
  }

  getJob(){
this.service.getVacantData().subscribe((res) =>{

for (let obj of res['details']) {
  this.vacantDetail = obj.Company_name
  console.log("object:", obj.Company_name);
  for (let key in obj) {
    console.log(obj[key]);


  }
}
})
  }

}
