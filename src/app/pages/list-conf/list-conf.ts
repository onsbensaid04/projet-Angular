
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Conference } from '../../models/conference';
import { ConferenceCard } from '../../sharedComponent/conference-card/conference-card';

@Component({
  selector: 'app-list-conf',
  imports: [FormsModule, CommonModule, ConferenceCard],
  templateUrl: './list-conf.html',
  styleUrl: './list-conf.css',
})
export class ListConf {

  list: Conference[] = [
    {
      id:1,

      title: "Introduction à l'IA générative",
      description: "Découvrir l'intelligence artificielle générative",
      place: "Tunis",

      date: "2026-06-12",
      nbrMax: 50,
      nbrReservation: 8,
      picture: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600"
    },
    {
      id:2,

      title: "MLOps en production",
      description: "Déploiement des modèles Machine Learning",
      place: "Tunis",

      date: "2026-06-12",
      nbrMax: 30,
      nbrReservation: 22,
      picture: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600"
    },
    {
      id:3,

      title: "Angular et architecture micro-frontends",
      description: "Développement web avec Angular",
      place: "Tunis",

      date: "2026-06-12",
      nbrMax: 40,
      nbrReservation: 40,
      picture: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600"
    }
  ];

  searchTitle: string = '';

  participate(conf: Conference) {
    conf.nbrReservation++;
  }
}
