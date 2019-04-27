import { Component, OnInit } from '@angular/core';
import { MovieQueryService } from '../movieQuery.service';
import { StateService } from '../state.service';
import { Movie } from '../movie';
import { toYear } from '../lib/omdbHelpers';
// import { responseToJSON } from '../lib/omdbHelpers';
// import {Movie } from '../Movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];

  constructor( private api: MovieQueryService, private store: StateService ) {
  }

  ngOnInit() {
    this.api.fetchMovies('batman').then( (movies: Movie[]) => this.store.setState({ movies }));
    this.store.state.subscribe( (state) => {
      this.movies = state.movies.filter( movie => {
        const movieYear = toYear( movie.Year );
        return ( movieYear >= state.fromYear ) && (movieYear <= state.toYear) ? true : false;
      });
    });
  }
}

