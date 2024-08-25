import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { LearnComponent } from './learn/learn.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { 
    path: 'home', 
    component: HomeComponent,
    pathMatch: 'full'
  },  
  { 
    path: 'about', 
    component: AboutComponent 
  },
  { 
    path: 'projects', 
    component: ProjectsComponent 
  },
  { 
    path: 'contact', 
    component: ContactComponent 
  },
  {
    path: 'learn',
    component: LearnComponent,
    pathMatch: 'full'
  }
];
