import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SunComponent } from './components/sun/sun.component';
import { SunRoutingModule } from './sun-routing.module';
import { IconsProviderModule } from '../ng-zorro.module';

@NgModule({
  declarations: [
    SunComponent
  ],
  imports: [
    CommonModule,
    SunRoutingModule,
    IconsProviderModule
  ]
})
export class SunModule { }
