import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent {
  users: any[] = [
    {
      nom: 'Norris',
      Prenom: 'Chuck',
      email: 'chuck.norris@dieu.com',
      telephones: ['0123456789', '0123456789'],
      entreprise: 'God & Cie',
    },
  ];

  userForm: FormGroup = this.formBuilder.group({
    nom: ['', [Validators.minLength(2), Validators.required]],
    prenom: ['', [Validators.minLength(2), Validators.required]],
    email: ['', [Validators.email, Validators.required]],
    telephones: this.formBuilder.array([
      this.formBuilder.control('', [
        Validators.maxLength(10),
        Validators.required,
      ]),
    ]),
    entreprise: ['', [Validators.minLength(2), Validators.required]],
  });

  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder) {}

  private addUser(): void {
    this.users.push(this.userForm.value);
    this.userForm.reset();
    this.submitted = false;
  }

  public onSubmit(): void {
    this.submitted = true;
    if (this.userForm.valid) {
      this.addUser();
    }
  }

  public get form() {
    return this.userForm.controls;
  }

  /**
   * Méthode pour contrôler
   */
  public get telephones(): FormArray {
    return this.userForm.get('telephones') as FormArray;
  }

    // Méthode pour ajouter un champs "téléphones"

  public addTelephone(): void {
    this.telephones.push(
      this.formBuilder.control('', [
        Validators.minLength(10),
        Validators.required,
      ])
    );
  }

  // Méthode pour supprimer un champs "téléphones"
public removeTelephone(): void{
  this.telephones.removeAt(this.telephones.length -1);
}



}
