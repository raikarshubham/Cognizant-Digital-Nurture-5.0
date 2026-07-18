import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCard {

  @Input() course!: { name: string; code: string };

  @Output() enrollRequested = new EventEmitter<string>();

  enrollCourse() {
    this.enrollRequested.emit(this.course.name);
  }
}