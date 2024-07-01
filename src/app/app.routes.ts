import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GenreMovieComponent } from './genre-movie/genre-movie.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'genre', component: GenreMovieComponent },
];
