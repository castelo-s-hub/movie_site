import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {AboutComponent} from "./components/about/about.component";
import {BlogComponent} from "./components/blog/blog.component";
import {Blog1Component} from "./components/blog/blog1/blog1.component";
import {ContactComponent} from "./components/contact/contact.component";
import {BlogDetailsComponent} from "./components/blog/blog-details/blog-details.component";

const routes: Routes = [
  { path:'', redirectTo:'/home', pathMatch:'full'},
  { path:'home', component: HomeComponent },
  { path:'about', component: AboutComponent },
  { path:'blog', component: BlogComponent, children: [
    { path:'', component: Blog1Component },
    { path:'1', component: BlogDetailsComponent },
  ]},
  { path:'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
