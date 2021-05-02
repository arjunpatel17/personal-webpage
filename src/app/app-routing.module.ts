import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { EntryComponent } from './entry/entry.component';
import { ExperienceComponent } from './experience/experience.component';
import { MainComponent } from './main/main.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  { path: '', redirectTo: 'profile', pathMatch: 'full'  },
  { path: 'profile', component: ProfileComponent, children: [
    {
      path: '', 
      redirectTo: 'main',
      pathMatch: 'full'
    },
    {
      path: 'main', 
      component: MainComponent, 
      data: {animation: 'main'}
    },
    {
      path: 'experience',
      component: ExperienceComponent, 
      data: {animation: 'experience'}
    },
    {
      path: 'education',
      component: EducationComponent,
      data: {animation: 'education'} 
    },
    {
      path: 'projects',
      component: ProjectsComponent, 
      data: {animation: 'projects'}
    },
    {
      path: 'contact',
      component: ContactComponent, 
      data: {animation: 'contact'}
    }
  ]},
  // { path: 'entry', component: EntryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
