import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';

type Decade = '1990s' | '2000s';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  decade: Decade = '1990s';
  constructor( private state: StateService ) {
    // console.log(this.inputText);
    this.filterYears( this.decade );
  }

  filterYears(decade: Decade) {
    // We write a more elaborte mechanism that extracts all decades possible 
    // from the films, but for this example we'll restrict it to these decades
    if ( decade === '2000s' ) {
      this.state.setState({ fromYear: 2000, toYear: 2999 });
    } else {
      this.state.setState({ fromYear: 1990, toYear: 1999 });
    }
  }

  ngOnInit() {}

}
