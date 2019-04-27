import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieQueryService } from './movieQuery.service';
import { SearchComponent } from './search/search.component';
import { StateService } from './state.service';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    MovieQueryService,
    StateService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
