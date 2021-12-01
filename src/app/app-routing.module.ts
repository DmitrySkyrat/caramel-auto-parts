import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './modules/shared/components/error/error.component';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule), data: { breadcrumb: 'Login' }},
  { path: 'registration', loadChildren: () => import('./modules/registration/registration.module').then(m => m.RegistrationModule), data: { breadcrumb: 'Registration' }},
  { path: '', loadChildren: () => import('./modules/base/base.module').then(m => m.BaseModule) },
  { path: '**', component: ErrorComponent, data: { title: 'error', breadcrumb: 'Error' }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
