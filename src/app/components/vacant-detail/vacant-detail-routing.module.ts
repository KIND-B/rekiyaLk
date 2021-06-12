import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VacantDetailComponent } from './vacant-detail.component';
import { VacantPageComponent } from './vacant-page/vacant-page.component';

const routes: Routes = [{ path: '', component: VacantDetailComponent },{ path: 'detail', component: VacantPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VacantDetailRoutingModule { }
