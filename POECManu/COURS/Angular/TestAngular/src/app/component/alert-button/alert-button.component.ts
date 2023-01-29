import { Component } from '@angular/core';

@Component({
  selector: 'app-alert-button',
  templateUrl: './alert-button.component.html',
  styleUrls: ['./alert-button.component.scss']
})

export class AlertButtonComponent {
  onClick(){
    alert("Tout pété !!!")
  }

}
