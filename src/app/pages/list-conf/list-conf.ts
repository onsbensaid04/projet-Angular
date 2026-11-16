import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

export interface Conference {
  id: number;
  picture: string;
  title: string;
  date: Date;
  adresse: string;
  available_place: number;
}

@Component({
  selector: 'app-list-conf',
  imports: [DatePipe],
  templateUrl: './list-conf.html',
  styleUrl: './list-conf.css',
})
export class ListConf {
  conferences: Conference[] = [
    {
      id: 1,
      picture: 'https://picsum.photos/seed/conf1/600/360',
      title: "Introduction à l'IA générative",
      date: new Date('2026-12-05T09:30:00'),
      adresse: 'ESPRIT, Ghazela, Ariana',
      available_place: 42,
    },
    {
      id: 2,
      picture: 'https://picsum.photos/seed/conf2/600/360',
      title: 'MLOps en production',
      date: new Date('2026-12-12T14:00:00'),
      adresse: 'Centre de conférences, Tunis',
      available_place: 8,
    },
    {
      id: 3,
      picture: 'https://picsum.photos/seed/conf3/600/360',
      title: 'Angular et architecture micro-frontends',
      date: new Date('2027-01-09T10:00:00'),
      adresse: 'Technopole El Ghazala',
      available_place: 0,
    },
  ];
}
