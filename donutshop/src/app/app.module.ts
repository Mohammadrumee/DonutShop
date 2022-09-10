import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DonutDetailsComponent } from './component/donut-details/donut-details.component';
import { DonutListComponent } from './component/donut-list/donut-list.component';
import { DonutCartComponent } from './component/donut-cart/donut-cart.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DonutDetailsComponent,
    DonutListComponent,
    DonutCartComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
