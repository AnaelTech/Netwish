import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, WritableSignal, inject } from '@angular/core';
import { ApiResponse, Genre, GenresResponse } from '../interface';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiUrl = environment.apiUrl;
  apiKey = environment.apiKey;
  apiUrlGenre = environment.apiUrlGenre;

  http: HttpClient = inject(HttpClient);

  getMovies(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(
      this.apiUrl + 'popular' + '?api_key=' + this.apiKey
    );
  }

  getGenreMovies(): Observable<GenresResponse> {
    return this.http.get<GenresResponse>(
      this.apiUrlGenre + 'list' + '?api_key=' + this.apiKey
    );
  }
}
