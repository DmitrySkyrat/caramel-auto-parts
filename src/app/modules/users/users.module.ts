import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './components/user.component';
import { IconsProviderModule } from '../ng-zorro.module';



@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    IconsProviderModule
  ],
  exports: [UserComponent]
})
export class UsersModule {}
