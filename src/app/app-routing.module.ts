import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProjectsComponent} from './views/projects/projects.component';
import {AboutComponent} from './views/about/about.component';
import {ContactComponent} from './views/contact/contact.component';
import { ProjectComponent } from './views/project/project.component';

const routes: Routes = [
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'projects/:projectId',
    component: ProjectComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: '**',
    redirectTo: 'about',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
