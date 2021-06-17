import { Component, Input, OnInit } from '@angular/core';
import { VacanciesDetailService } from 'src/app/services/vacancies-detail.service';


@Component({
  selector: 'app-add-preview',
  templateUrl: './add-preview.component.html',
  styleUrls: ['./add-preview.component.scss']
})
export class AddPreviewComponent implements OnInit {

  // @Input() data
  constructor(private service:VacanciesDetailService) { }

  public vacantDetail:Array<any> = []
  ngOnInit(): void {
  }
getVacantDetail(){
  this.vacantDetail = this.service.data
}
}
