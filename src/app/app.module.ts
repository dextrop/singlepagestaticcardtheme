import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductcardComponent } from './productcard/productcard.component';
import { ProductsearchComponent } from './productsearch/productsearch.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductgallerysampleComponent } from './productgallerysample/productgallerysample.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductcardComponent,
    ProductsearchComponent,
    NavbarComponent,
    HomeComponent,
    ProductgallerysampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
