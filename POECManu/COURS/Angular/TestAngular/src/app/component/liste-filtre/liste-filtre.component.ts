import { Component } from '@angular/core';

@Component({
  selector: 'app-liste-filtre',
  templateUrl: './liste-filtre.component.html',
  styleUrls: ['./liste-filtre.component.scss']
})
export class ListeFiltreComponent {

  listes: string[] = [
    `David Bowie`,
    `Jimmy Hendrix`,
    `Johnny`,
    `Marcel`,
    `Lolo`,
  ];

}
