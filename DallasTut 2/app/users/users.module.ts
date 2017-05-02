import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule } from '@angular/router';
import { TutorEditorComponent } from "./tutors/tutor-editor/tutor-editor.component";
import { StudentEditorComponent } from "./students/student-editor/student-editor.component";
import { CoursesEditorComponent } from "./courses/courses-editor.component";
import { TutorProfileComponent } from "./tutors/tutor-profile/tutor-profile.component";
import { StudentProfileComponent } from "./students/student-profile/student-profile.component";
import { TutorRepository } from "./api/tutor-repository.service";
import { StudentRepository } from "./api/student-repository.service";
// import { TutorProfileComponent, StudentProfileComponent, StudentEditorComponent, TutorEditorComponent, TutorRepository, StudentRepository, CoursesEditorComponent } from './index';
import { routing } from '../app.routing';
import { FindTutorComponent } from "./tutors/findTutor/findTutor-component";

@NgModule({
  imports:      [ 
    FormsModule,
    BrowserModule,
    HttpModule,
    routing,
    RouterModule,
  ],
  declarations: [
    TutorEditorComponent,
    StudentEditorComponent,
    CoursesEditorComponent,
    TutorProfileComponent,
    StudentProfileComponent,
    FindTutorComponent
  ],
  exports: [
    TutorEditorComponent,
    StudentEditorComponent,
    CoursesEditorComponent,
    TutorProfileComponent,
    StudentProfileComponent,
    FindTutorComponent
  ],
  providers: [
      TutorRepository,
      StudentRepository,
  ]
})

export class UsersModule { }