import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  inputText = true;

  constructor( private state: StateService ) {
    // console.log(this.inputText);
  }

  filterYears(value: boolean) {
    // We write a more elaborte mechanism that extracts all decades possible 
    // from the films, but for this example we'll restrict it to these decades
    if ( value ) {
      this.state.setState({ fromYear: 2000, toYear: 2999 });
    } else {
      this.state.setState({ fromYear: 1990, toYear: 1999 });
    }
  }

  ngOnInit() {}

}
