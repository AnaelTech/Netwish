import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { movie } from '../interface';
import { CommonModule, NgForOf } from '@angular/common';
import { LimitToPipe } from '../limit-to.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgForOf, LimitToPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  movies: movie[] = [];
  id: number | undefined;

  constructor(private serviceApi: ApiService) {}

  ngOnInit(): void {
    this.serviceApi.getMovies().subscribe((data) => {
      this.movies = data.results;
      console.log(this.movies);
    });

    this.serviceApi.getMoviesImages(1022789).subscribe((data) => {
      console.log(data);
    });
  }
}
