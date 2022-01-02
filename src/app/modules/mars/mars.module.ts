import { NgModule } from '@angular/core';
import { MarsGalleryComponent } from './components/mars-gallery.component';
import { CoreModule } from '../core/core.module';
import { MarsRoutingModule } from './mars-routing.module';
import { IconsProviderModule } from '../ng-zorro.module';
import { MarsPicturesComponent } from './components/mars-pictures/mars-pictures.component';
import { MarsDefaultComponent } from './components/mars-default/mars-default.component';
import { MarsVideosComponent } from './components/mars-videos/mars-videos.component';



@NgModule({
  declarations: [
    MarsGalleryComponent,
    MarsDefaultComponent,
    MarsPicturesComponent,
    MarsVideosComponent
  ],
  imports: [
    CoreModule,
    IconsProviderModule,
    MarsRoutingModule
  ]
})
export class MarsModule { }
