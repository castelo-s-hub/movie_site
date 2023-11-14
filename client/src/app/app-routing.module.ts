import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {AboutComponent} from "./components/about/about.component";
import {BlogComponent} from "./components/blog/blog.component";
import {Blog1Component} from "./components/blog/blog1/blog1.component";
import {ContactComponent} from "./components/contact/contact.component";
import {BlogDetComponent} from "./components/blog/blog-det/blog-det.component";

const routes: Routes = [
  { path:'', redirectTo:'/home', pathMatch:'full'},
  { path:'home', component: HomeComponent },
  { path:'about', component: AboutComponent },
  { path:'blog', component: BlogComponent, children: [
    { path:'', component: Blog1Component },
    { path:'1', component: BlogDetComponent },
  ]},
  { path:'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
