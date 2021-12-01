import { NgModule } from '@angular/core';
import { RegistrationComponent } from './components/registration.component';
import { RegistrationRoutingModule } from './registration-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    RegistrationComponent
  ],
  imports: [
    SharedModule,
    RegistrationRoutingModule
  ]
})
export class RegistrationModule {}
