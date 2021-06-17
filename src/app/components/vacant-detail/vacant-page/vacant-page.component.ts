import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { VacanciesDetailService } from 'src/app/services/vacancies-detail.service';

@Component({
  selector: 'app-vacant-page',
  templateUrl: './vacant-page.component.html',
  styleUrls: ['./vacant-page.component.scss']
})
export class VacantPageComponent implements OnInit {

  constructor(private service: VacanciesDetailService, private router:Router) { }
  vacantDetail: Array<any> = []
  showModal: boolean = false;
  addPreViewArray = []
  add
  vacant_title:string
  Company_name:string
  start_date:string
  end_date:string
  expertise_area:string

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

    this.vacant_title = data.vacant_title
    this.Company_name = data.Company_name
    this.start_date = data.start_date
    this.end_date = data.end_date
    this.expertise_area = data.expertise_area
    console.log("company Data",);
    // data.map(t=>{
    //   t.Company_nam
    // });
    this.showModal = true;
    this.service.getTableData(data);

  }

  //Bootstrap Modal Close event
  hide() {
    this.showModal = false;
  }


}
