import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCard } from '../../components/course-card/course-card';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [
    CommonModule,
    CourseCard
  ],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit {

  isLoading = true;

  courses = [
    {
      id: 1,
      name: 'Angular',
      code: 'ANG101',
      credits: 4,
      gradeStatus: 'passed',
      enrolled: true
    },
    {
      id: 2,
      name: 'Java',
      code: 'JAVA101',
      credits: 3,
      gradeStatus: 'pending',
      enrolled: false
    },
    {
      id: 3,
      name: 'Spring Boot',
      code: 'SB101',
      credits: 4,
      gradeStatus: 'failed',
      enrolled: false
    },
    {
      id: 4,
      name: 'MySQL',
      code: 'SQL101',
      credits: 2,
      gradeStatus: 'passed',
      enrolled: true
    },
    {
      id: 5,
      name: 'React',
      code: 'REACT101',
      credits: 3,
      gradeStatus: 'pending',
      enrolled: false
    }
  ];

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }

  trackByCourseId(index: number, course: any) {
    return course.id;
  }

  onEnroll(courseId: number) {
    console.log('Enrolling in course:', courseId);
  }

}