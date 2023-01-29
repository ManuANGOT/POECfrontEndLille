import { Component } from '@angular/core';

@Component({
  selector: 'app-liste-course',
  templateUrl: './liste-course.component.html',
  styleUrls: ['./liste-course.component.scss']
})
export class ListeCourseComponent {
articles:string[] = []

newArticle! : string

addArticle(){
  this.articles.push(this.newArticle)
  this.newArticle = '';
}
}
