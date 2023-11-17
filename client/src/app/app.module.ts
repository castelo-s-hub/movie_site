import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from "@angular/material/sidenav";
import { BlogComponent } from './components/blog/blog.component';
import { Blog1Component } from './components/blog/blog1/blog1.component';
import { ContactComponent } from './components/contact/contact.component';
import { BlogDetComponent } from './components/blog/blog-det/blog-det.component';
import { ServiceComponent } from './components/pages/service/service.component';
import { ServiceMainComponent } from './components/pages/service/service-main/service-main.component';
import { ServiceDet1Component } from './components/pages/service/service-det1/service-det1.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    Blog1Component,
    ContactComponent,
    BlogDetComponent,
    ServiceComponent,
    ServiceMainComponent,
    ServiceDet1Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
