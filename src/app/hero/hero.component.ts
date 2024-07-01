import { Component, OnInit, inject } from '@angular/core';
import { movie } from '../interface';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent implements OnInit {
  firstMovie: movie | undefined;

  serviceApi: ApiService = inject(ApiService);

  ngOnInit(): void {
    this.fetchMovie();
  }

  fetchMovie() {
    this.serviceApi.getMovies().subscribe((data) => {
      this.firstMovie = data.results[this.getRandomId()];
      //console.log(this.firstMovie);
    });
  }

  getRandomId() {
    return Math.floor(Math.random() * 20);
  }
}
