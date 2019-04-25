import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { getAllMoviesWithDetails } from './lib/helpers';

@Injectable({
  providedIn: 'root'
})

export class MovieQueryService {

  constructor() {}
  fetchMovies( query: string ) {
    return getAllMoviesWithDetails( query );
  }
 
}
