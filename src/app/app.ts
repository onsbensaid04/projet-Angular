import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './sharedComponent/footer/footer';
import { Header } from './sharedComponent/header/header';
import { Home } from './pages/home/home';
import {ListConf} from './pages/list-conf/list-conf';

@Component({
  imports: [Header, Header, Home, ListConf, Footer],  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('test');
}
