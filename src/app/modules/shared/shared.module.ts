import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './components/error/error.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { IconsProviderModule } from '../ng-zorro.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ErrorComponent,
    BreadcrumbsComponent,
    FeedbackComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IconsProviderModule
  ],
  exports: [FeedbackComponent]
})
export class SharedModule { }
