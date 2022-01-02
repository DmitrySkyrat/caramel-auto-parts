import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SunComponent } from './components/sun/sun.component';

const routes: Routes = [
    { path: '', component: SunComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SunRoutingModule {}
