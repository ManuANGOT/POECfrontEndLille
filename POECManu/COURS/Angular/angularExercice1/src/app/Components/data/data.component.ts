import { Component } from '@angular/core';
import { User} from '../../models/user';
import { users } from 'src/app/models/users';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent {
  users: User[] = users

}
