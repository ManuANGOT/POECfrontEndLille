import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './component/button/button.component';
import { UsersComponent } from './component/users/users.component';
import { AlertButtonComponent } from './component/alert-button/alert-button.component';
import { ListeComponent } from './component/liste/liste.component';
import { MagieComponent } from './component/magie/magie.component';
import { ListeFiltreComponent } from './component/liste-filtre/liste-filtre.component';
import { BoutonGeneriqueComponent } from './component/bouton-generique/bouton-generique.component';
import { BoutonMenuComponent } from './component/bouton-menu/bouton-menu.component';
import { ListeCourseComponent } from './component/liste-course/liste-course.component';
import { ReactiveListeCoursesComponent } from './component/reactive-liste-courses/reactive-liste-courses.component';
import { FormBuilderListComponent } from './component/form-builder-list/form-builder-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    UsersComponent,
    AlertButtonComponent,
    ListeComponent,
    MagieComponent,
    ListeFiltreComponent,
    BoutonGeneriqueComponent,
    BoutonMenuComponent,
    ListeCourseComponent,
    ReactiveListeCoursesComponent,
    FormBuilderListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
