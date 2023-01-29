import { Component } from '@angular/core';

@Component({
  selector: 'app-clock-menu',
  templateUrl: './clock-menu.component.html',
  styleUrls: ['./clock-menu.component.css'],
})
export class ClockMenuComponent {
  timezones: string[] = [
    'Europe/London',
    'Europe/Paris',
    'Europe/Helsinki',
    'America/Los_Angeles',
    'America/Montréal',
  ];

  setTime(timezone: string): string {
    const date = new Date().toLocaleString('fr-FR', {
      timeZone: timezone,
    });

    const time = date.split(' ')[1];

    setInterval(() => {
      this.setTime(timezone);
    }, 1000);

    return time;
  }
}
