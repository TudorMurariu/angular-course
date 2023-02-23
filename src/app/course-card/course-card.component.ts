import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit{

  @Input()
  public course:Course;

  @Output()
  courseSelected = new EventEmitter<Course>();

  onCourseViewd() {
    this.courseSelected.emit(this.course);
  }

  ngOnInit() {
    
  }
}
