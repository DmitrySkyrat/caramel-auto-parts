import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US, ru_RU } from 'ng-zorro-antd/i18n';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import ru from '@angular/common/locales/ru';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { AuthInterceptor } from './modules/core/intercetors/auth.interceptor';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';

registerLocaleData(en);
registerLocaleData(ru);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzBreadCrumbModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    {
      provide: NZ_I18N,
      useFactory: (localId: string) => {
        switch (localId) {
          case 'en':
            return en_US;
          case 'fr':
            return ru_RU;
          default:
            return en_US;
        }
      },
      deps: [LOCALE_ID]
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
  constructor(private router: Router) {
    const replacer = (key: string, value: any): string =>
      typeof value === 'function' ? value.name : value;
    console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  }
}
