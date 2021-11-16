import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { IconsProviderModule } from '../ng-zorro.module';
import { BaseModule } from '../core/core.module';
import { AuthRoutingModule } from './auth-routing.module';
import { Error401Component } from './components/error401/error401.component';



@NgModule({
  declarations: [
    LoginComponent,
    Error401Component
  ],
  imports: [
    BaseModule,
    IconsProviderModule,
    AuthRoutingModule
  ]
})
export class AuthModule {}
