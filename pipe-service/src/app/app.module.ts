import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FomartDataPipe } from './pipes/format-data.pipe';
import { PipeComponent } from './component/pipe/pipe.component';
import { ServiceTestComponent } from './component/service-test/service-test.component';
import {LocalerService} from '../app/service/localer.service';

@NgModule({
  declarations: [
    AppComponent,
    FomartDataPipe,
    PipeComponent,
    ServiceTestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    LocalerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
