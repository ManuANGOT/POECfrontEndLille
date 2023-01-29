import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  nom : string = `Apeuprès`;
  prenom : string = `Jean-Michel`;
  job : string = `chanteur`;
  image : string = `https://i.ytimg.com/vi/k8oQnnPPeBw/hqdefault.jpg`



}
