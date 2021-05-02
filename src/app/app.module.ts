import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {MenubarModule} from 'primeng/menubar';
import {MenuModule} from 'primeng/menu';
import {SidebarModule} from 'primeng/sidebar';
import {FieldsetModule} from 'primeng/fieldset';
import {ProgressBarModule} from 'primeng/progressbar';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {InputTextModule} from 'primeng/inputtext';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { MainComponent } from './main/main.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { ProjectsComponent } from './projects/projects.component';
import { EntryComponent } from './entry/entry.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    MainComponent,
    ExperienceComponent,
    EducationComponent,
    ProjectsComponent,
    EntryComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    CardModule,
    FieldsetModule,
    HttpClientModule,
    MenubarModule,
    MenuModule,
    ProgressBarModule,
    SidebarModule,
    ReactiveFormsModule,
    InputTextareaModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
