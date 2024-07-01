import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Genre, movie } from '../interface';

@Component({
  selector: 'app-genre-movie',
  standalone: true,
  imports: [],
  templateUrl: './genre-movie.component.html',
  styleUrl: './genre-movie.component.css',
})
export class GenreMovieComponent implements OnInit {
  serviceApi: ApiService = inject(ApiService);
  genres: Genre[] = [];

  ngOnInit(): void {}
}
