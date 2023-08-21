import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent} from "./header/header.component";
import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";
import {EducationComponent} from "./education/education.component";
import {ExperienceComponent} from "./experience/experience.component";
import {SkillsComponent} from "./skills/skills.component";
import {InfoComponent} from "./info/info.component";
import {AddEducationComponent} from "./education/addEducation/addEducation.component";
import {RouterModule, Routes} from "@angular/router";
import {AddExperienceComponent} from "./experience/addExperience/addExperience.component";
import {HttpClientModule} from "@angular/common/http";
import {DeleteEducationComponent} from "./education/deleteEducation/deleteEducation.component";
import {DeleteExperienceComponent} from "./experience/deleteExperience/deleteExperience.component";
import {EditEducationComponent} from "./education/editEducation/editEducation.component";
import {EditExperienceComponent} from "./experience/editExperience/editExperience.component";
import {EditInfoComponent} from "./info/editInfo/editInfo.component";
import {DeleteSkillComponent} from "./skills/deleteSkill.component";

const appRoutes: Routes = [
  {path: '', component:LoginComponent},
  {path: 'signup', component:SignupComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'education', component:EducationComponent},
  {path: 'experience', component:ExperienceComponent},
  {path: 'info', component:InfoComponent},
  {path: 'skills', component:SkillsComponent},
  {path:'addEdu', component:AddEducationComponent},
  {path:'addExp', component:AddExperienceComponent},
  {path:'deleteEdu/:edId', component:DeleteEducationComponent},
  {path:'deleteExp/:exId', component:DeleteExperienceComponent},
  {path:'editEdu/:edId', component:EditEducationComponent},
  {path:'editExp/:exId', component:EditExperienceComponent},
  {path:'editInfo', component:EditInfoComponent},
  {path:'deleteSkill/:sId', component:DeleteSkillComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    EducationComponent,
    AddEducationComponent,
    EditEducationComponent,
    DeleteEducationComponent,
    ExperienceComponent,
    AddExperienceComponent,
    EditExperienceComponent,
    DeleteExperienceComponent,
    SkillsComponent,
    InfoComponent,
    EditInfoComponent,
    HeaderComponent,
    DeleteSkillComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
