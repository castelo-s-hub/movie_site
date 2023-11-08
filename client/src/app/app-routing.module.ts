import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {AboutComponent} from "./components/about/about.component";
import {BlogComponent} from "./components/blog/blog.component";

const routes: Routes = [
  { path:'', redirectTo:'/home', pathMatch:'full'},
  { path:'home', component: HomeComponent },
  { path:'about', component: AboutComponent},
  { path:'blog', component: BlogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
