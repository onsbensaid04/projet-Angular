import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Conference } from '../../models/conference';

@Component({
  selector: 'app-conference-card',
  imports: [CommonModule],
  templateUrl: './conference-card.html',
  styleUrl: './conference-card.css'
})
export class ConferenceCard {

  @Input() conf!: Conference;

  @Output() participateEvent = new EventEmitter<Conference>();

  participate() {
    this.participateEvent.emit(this.conf);
  }
}
