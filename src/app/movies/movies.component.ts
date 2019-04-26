import { Component, OnInit } from '@angular/core';
import { MovieQueryService } from '../movieQuery.service';
import { responseToJSON } from '../lib/omdbHelpers';
// import {Movie } from '../Movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies = [];

  constructor( api: MovieQueryService ) {
    api.fetchMovies('batman').then( i => this.movies = i );
  }

  ngOnInit() {
  }
}
