import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {AboutComponent} from "./components/about/about.component";
import {BlogComponent} from "./components/blog/blog.component";
import {Blog1Component} from "./components/blog/blog1/blog1.component";
import {ContactComponent} from "./components/contact/contact.component";
 master
 HEAD
import {BlogDetComponent} from "./components/blog/blog-det/blog-det.component";
=======
import {BlogDetailsComponent} from "./components/blog/blog-details/blog-details.component";
 master
=======
import {BlogDetailsComponent} from "./components/blog/blog-details/blog-details.component";
 main

const routes: Routes = [
  { path:'', redirectTo:'/home', pathMatch:'full'},
  { path:'home', component: HomeComponent },
  { path:'about', component: AboutComponent },
  { path:'blog', component: BlogComponent, children: [
    { path:'', component: Blog1Component },
 master
 HEAD
    { path:'1', component: BlogDetComponent },
=======
    { path:'1', component: BlogDetailsComponent },
 master
=======
    { path:'1', component: BlogDetailsComponent },
 main
  ]},
  { path:'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
