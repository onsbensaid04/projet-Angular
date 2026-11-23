import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-friends-list',
  imports: [FormsModule],
  templateUrl: './friends-list.html',
  styleUrl: './friends-list.css'
})
export class FriendsList {

  name: string = 'Ahmed';          // variable partagée par les 3 champs

  friends: string[] = ['Sami', 'Sarra', 'Amine'];

}
