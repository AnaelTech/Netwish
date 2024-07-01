import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from '../services/api.service';
import { movie } from '../interface';
import { LimitToPipe } from '../limit-to.pipe';
import { HeroComponent } from '../hero/hero.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LimitToPipe, HeroComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  movies: movie[] = [];

  serviceApi: ApiService = inject(ApiService);

  ngOnInit(): void {
    this.fetchMovie();
    this.OnMouseOver();
  }

  fetchMovie() {
    this.serviceApi.getMovies().subscribe((data) => {
      this.movies = data.results;
      //console.log(this.movies);
    });
  }

  OnMouseOver() {
    console.log('Mouse Over');
  }
}
