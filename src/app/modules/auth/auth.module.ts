import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { IconsProviderModule } from '../ng-zorro.module';
import { CoreModule } from '../core/core.module';
import { AuthRoutingModule } from './auth-routing.module';
import { Error401Component } from './components/error401/error401.component';



@NgModule({
  declarations: [
    LoginComponent,
    Error401Component
  ],
  imports: [
    CoreModule,
    IconsProviderModule,
    AuthRoutingModule
  ]
})
export class AuthModule {}
