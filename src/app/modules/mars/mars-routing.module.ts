import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarsGalleryComponent } from './components/mars-gallery.component';
import { MarsPicturesComponent } from './components/mars-pictures/mars-pictures.component';
import { MarsVideosComponent } from './components/mars-videos/mars-videos.component';
import { MarsDefaultComponent } from './components/mars-default/mars-default.component';

const routes: Routes = [
  { path: '', component: MarsGalleryComponent, children: [
    {path: 'default', component: MarsDefaultComponent},
    {path: 'pictures', component: MarsPicturesComponent},
    {path: 'videos', component: MarsVideosComponent}
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarsRoutingModule {}
