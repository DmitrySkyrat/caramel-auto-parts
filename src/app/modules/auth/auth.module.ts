import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { IconsProviderModule } from '../ng-zorro.module';
import { BaseModule } from '../base/base.module';
import { AuthRoutingModule } from './auth-routing.module';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    BaseModule,
    IconsProviderModule,
    AuthRoutingModule
  ]
})
export class AuthModule {}
