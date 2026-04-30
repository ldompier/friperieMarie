import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { Accueil } from './pages/accueil/accueil';
import { APropos } from './pages/a-propos/a-propos';
import { Fonctionnement } from './pages/fonctionnement/fonctionnement';
import { HeuresContact } from './pages/heures-contact/heures-contact';

@Component({
  selector: 'app-root',
  imports: [
    Navbar,
    Footer,
    Accueil,
    APropos,
    Fonctionnement,
    HeuresContact,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}

