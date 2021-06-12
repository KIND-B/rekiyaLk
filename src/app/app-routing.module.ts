import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/commonComponents/home/home.component';
import { NotFoundComponent } from './components/commonComponents/not-found/not-found.component';

const routes: Routes = [{ path: 'auth', loadChildren: () => import('./components/authmod/authmod.module').then(m => m.AuthmodModule) },
{path:'', component:HomeComponent},
{ path: 'vacant', loadChildren: () => import('./components/vacant-detail/vacant-detail.module').then(m => m.VacantDetailModule) },
{path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
