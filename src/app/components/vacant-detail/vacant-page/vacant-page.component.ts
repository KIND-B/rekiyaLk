import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { VacanciesDetailService } from 'src/app/services/vacancies-detail.service';

@Component({
  selector: 'app-vacant-page',
  templateUrl: './vacant-page.component.html',
  styleUrls: ['./vacant-page.component.scss']
})
export class VacantPageComponent implements OnInit {

  constructor(private service: VacanciesDetailService) { }
  vacantDetail: Array<any> = []
  ngOnInit(): void {
    this.getJob();
  }


  getJob() {
    this.service.getVacantData().subscribe((res) => {

      for (let obj of res['details']) {
        this.vacantDetail.push(obj)
        // this.dtTrigger.next();

      }
    }, (err) => {
      console.log('-----> err', err);
    })
  }

  viewVacantDetail(data) {
    console.log(data);

    alert("you click me!!!!!!!!!");
  }


}
