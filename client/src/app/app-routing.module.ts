import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {AboutComponent} from "./components/about/about.component";
import {BlogComponent} from "./components/blog/blog.component";
import {Blog1Component} from "./components/blog/blog1/blog1.component";
import {ContactComponent} from "./components/contact/contact.component";
import {BlogDetComponent} from "./components/blog/blog-det/blog-det.component";
import {ServiceComponent} from "./components/pages/service/service.component";
import {ServiceMainComponent} from "./components/pages/service/service-main/service-main.component";
import {ServiceDet1Component} from "./components/pages/service/service-det1/service-det1.component";
import {ProjectsComponent} from "./components/pages/projects/projects.component";
import {ProjectsMainComponent} from "./components/pages/projects/projects-main/projects-main.component";
import {ProjectsDet1Component} from "./components/pages/projects/projects-det1/projects-det1.component";
import {TeamComponent} from "./components/pages/team/team.component";
import {TeamMainComponent} from "./components/pages/team/team-main/team-main.component";
import {TeamDet1Component} from "./components/pages/team/team-det1/team-det1.component";
import {FaqComponent} from "./components/pages/faq/faq.component";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {
    path: 'service', component: ServiceComponent, children: [
      {path: '', component: ServiceMainComponent},
      {path: '1', component: ServiceDet1Component},
    ]
  },
  {
    path: 'blog', component: BlogComponent, children: [
      {path: '', component: Blog1Component},
      {path: '1', component: BlogDetComponent},
    ]
  },
  {
    path: 'project', component: ProjectsComponent, children: [
      {path: '', component: ProjectsMainComponent},
      {path: '1', component: ProjectsDet1Component},
    ]
  },
  {
    path: 'team', component: TeamComponent, children: [
      {path: '', component: TeamMainComponent},
      {path: '1', component: TeamDet1Component},
    ]
  },
  {path: 'faq', component: FaqComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
