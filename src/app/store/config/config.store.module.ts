import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { configReducer } from './config.reducer';
// 2
@NgModule({
    imports: [
        StoreModule.forFeature('config', configReducer)
    ]
})
export class ConfigStoreModule { }