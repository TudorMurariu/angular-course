import { Component, NgModule } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public courses = COURSES;

  courseClickedIdk(course:Course) {
    console.log("IDKKKK", course)
  }
}
