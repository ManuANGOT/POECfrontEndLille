import { Component } from '@angular/core';

@Component({
  selector: 'app-bouton-menu',
  templateUrl: './bouton-menu.component.html',
  styleUrls: ['./bouton-menu.component.scss']
})
export class BoutonMenuComponent {
  boutons:any[] = [
    {
      boutonTexte: "Ping",
      alertMessage : "Pong"
    },
    {boutonTexte: "Marco",
    alertMessage : "Polo"
  },
  {
    boutonTexte: "Philippe",
  alertMessage : "Je sais où t'es"
}
  ]

}
