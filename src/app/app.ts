import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListConf } from './pages/list-conf/list-conf';
import { Footer } from './sharedComponent/footer/footer';
import { Header } from './sharedComponent/header/header';

@Component({
  imports: [RouterOutlet, Header, ListConf, Footer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('test');
}
