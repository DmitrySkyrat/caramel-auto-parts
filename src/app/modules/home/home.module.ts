import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './components/home.component';
import { IconsProviderModule } from '../ng-zorro.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [HomeRoutingModule, IconsProviderModule],
  exports: [HomeComponent]
})
export class HomeModule {}
