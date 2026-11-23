
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Conference } from '../../models/conference';

import { ConferenceCard } from '../../sharedComponent/conference-card/conference-card';
import { UserProfile } from '../../sharedComponent/user-profile/user-profile';
import { FriendsList } from '../../sharedComponent/friends-list/friends-list';
import { Notifications } from '../../sharedComponent/notifications/notifications';

@Component({
  selector: 'app-home',
  imports: [
    FormsModule,
    CommonModule,
    ConferenceCard,
    UserProfile,
    FriendsList,
    Notifications
  ],
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {

  list: Conference[] = [];

  searchTitle: string = '';

  ngOnInit() {

    this.list = [
      {
        id:1,
        title: "conference Angular",
        description: "web dev conference and workshop",
        place: "Tunis",
        date: "2026-06-12",
        nbrMax: 20,
        nbrReservation: 19,
        picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOglAuG-5NlIE3-mroYlJu7vhwDg_mUxW9hIRwbvsHL-cY7iW8pAswcXc&s=10"
      },
      {
        id:2,
        title: "conference Python",
        description: "Programming with Python and Artificial Intelligence",
        place: "Tunis",

        date: "2026-06-12",
        nbrMax: 30,
        nbrReservation: 15,
        picture: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=600"
      },
      {
        id:3,

        title: "conference Machine Learning",
        description: "Discover Machine Learning algorithms and practical applications",
        place: "Tunis",

        date: "2026-06-12",
        nbrMax: 25,
        nbrReservation: 10,
        picture: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600"
      }
    ];

  }

  participate(conf: Conference) {
    conf.nbrReservation++;
  }

}
