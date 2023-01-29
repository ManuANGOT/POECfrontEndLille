import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  id : number = 0;
  name : string = ``;
  username : string = ``;
  email : string = ``;
 
}
