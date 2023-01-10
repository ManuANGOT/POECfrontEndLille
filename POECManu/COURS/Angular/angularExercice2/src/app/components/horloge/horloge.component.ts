import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-horloge',
  templateUrl: './horloge.component.html',
  styleUrls: ['./horloge.component.css']
})
export class HorlogeComponent {
  @Input()
  time : string = '00:00:00';

}
