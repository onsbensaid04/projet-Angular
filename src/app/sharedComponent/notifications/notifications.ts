
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notifications',
  imports: [CommonModule],
  templateUrl: './notifications.html',
  styleUrl: './notifications.css'
})
export class Notifications {

  showNotif: boolean = false;

  notifications: string[] = [
    'Nouvelle conférence disponible.',
    'Votre inscription est confirmée.',
    'Une nouvelle invitation est disponible.'
  ];

  showNotifications() {
    this.showNotif = !this.showNotif;
  }

}
