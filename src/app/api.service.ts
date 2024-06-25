import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse, movie } from './interface';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiUrl = environment.apiUrl;
  apiKey = environment.apiKey;

  constructor(private http: HttpClient) {}

  getMovies(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(
      this.apiUrl + 'popular' + '?api_key=' + this.apiKey
    );
  }

  getMoviesImages(movie_id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.apiUrl + movie_id + '/images');
  }
}
