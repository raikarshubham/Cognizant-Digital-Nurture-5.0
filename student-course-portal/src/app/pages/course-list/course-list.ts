import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCard } from '../../components/course-card/course-card';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList {

  courses = [
    { name: 'Angular', code: 'ANG101' },
    { name: 'Java', code: 'JAVA101' },
    { name: 'Spring Boot', code: 'SB101' }
  ];

  onEnroll(courseName: string) {
    alert(`Successfully enrolled in ${courseName}`);
  }
}