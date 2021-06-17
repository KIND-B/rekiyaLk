import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPreviewComponent } from './add-preview/add-preview.component';
import { VacantDetailComponent } from './vacant-detail.component';
import { VacantPageComponent } from './vacant-page/vacant-page.component';

const routes: Routes = [{ path: '', component: VacantDetailComponent },{ path: 'detail', component: VacantPageComponent },{ path: 'addView', component: AddPreviewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VacantDetailRoutingModule { }
