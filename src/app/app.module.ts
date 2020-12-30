import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {MenubarModule} from 'primeng/menubar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { WantedComponent } from './wanted/wanted.component';
import { MainComponent } from './main/main.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    WantedComponent,
    MainComponent,
    ExperienceComponent,
    EducationComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    CardModule,
    MenubarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
