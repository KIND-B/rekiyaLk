import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VacantDetailRoutingModule } from './vacant-detail-routing.module';
import { VacantDetailComponent } from './vacant-detail.component';
import { VacantPageComponent } from './vacant-page/vacant-page.component';
import { DataTablesModule } from 'angular-datatables';
import { AddPreviewComponent } from './add-preview/add-preview.component';

@NgModule({
  declarations: [
    VacantDetailComponent,
    VacantPageComponent,
    AddPreviewComponent
  ],
  imports: [
    CommonModule,
    VacantDetailRoutingModule,
    DataTablesModule
  ]
})
export class VacantDetailModule { }
