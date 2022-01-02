import { NgModule } from '@angular/core';

import { BaseRoutingModule } from './base-routing.module';

import { BaseComponent } from './components/base.component';
import { IconsProviderModule } from '../ng-zorro.module';
import { SharedModule } from '../shared/shared.module';
import { UsersModule } from '../users/users.module';


@NgModule({
  declarations: [BaseComponent],
  imports: [BaseRoutingModule, IconsProviderModule, SharedModule, UsersModule],
  exports: [BaseComponent]
})
export class BaseModule {}
