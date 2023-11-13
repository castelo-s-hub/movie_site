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
<<<<<<< HEAD
import { BlogDetComponent } from './components/blog/blog-det/blog-det.component';
=======
import { BlogDetailsComponent } from './components/blog/blog-details/blog-details.component';
>>>>>>> master

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    Blog1Component,
    ContactComponent,
<<<<<<< HEAD
    BlogDetComponent
=======
    BlogDetailsComponent
>>>>>>> master
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
