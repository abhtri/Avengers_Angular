import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import { AvengerDetailsComponent } from './avenger-details/avenger-details.component';
import { AvengerServiceService } from './avenger-service.service';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    AvengerDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AvengerServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
