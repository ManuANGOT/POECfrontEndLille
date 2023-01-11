import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-liste-courses',
  templateUrl: './reactive-liste-courses.component.html',
  styleUrls: ['./reactive-liste-courses.component.scss'],
})
export class ReactiveListeCoursesComponent {
  article!: FormGroup;

  articles: any[] = [];

  constructor() {
    this.article = new FormGroup({

      designation: new FormControl('', Validators.minLength(3)), //Validators.pattern(regex)
      prix: new FormControl(0, Validators.min(5)),
    });
  }
  addArticle() {
    this.articles.push(this.article.value);
    this.article.reset();
  }

  get totalPrice(): number {
    return this.articles.reduce((total, article) => total + article.prix, 0); // 0 = valeur de départ
  }
}
