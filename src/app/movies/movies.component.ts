import { Component, OnInit } from '@angular/core';
// import {Movie } from '../Movie';
import { MOVIES } from '../mock-movies'

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies = MOVIES;

  constructor() { }

  ngOnInit() {
  }

}
