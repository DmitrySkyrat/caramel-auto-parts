import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../core/services/auth.guard';
import { BaseComponent } from './components/base.component';

const routes: Routes = [
  { 
    path: '', component: BaseComponent, children: [
      { path: 'home', loadChildren: () => import('../home/home.module').then(m => m.HomeModule), data: { breadcrumb: 'Home' } },
      { path: 'sun', canLoad: [AuthGuard], loadChildren: () => import('../sun/sun.module').then(m => m.SunModule), data: { breadcrumb: 'Sun' } },
      { path: 'planets', canLoad: [AuthGuard], loadChildren: () => import('../planets/planets.module').then(m => m.PlanetsModule), data: { breadcrumb: 'Planets' } },
      { path: 'planets', canLoad: [AuthGuard], loadChildren: () => import('../planets/planets.module').then(m => m.PlanetsModule), data: { breadcrumb: 'Planets' } },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule {}
