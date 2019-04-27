import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Movie } from './movie';

export interface State {
  movies?: Movie[];
  fromYear?: number;
  toYear?: number;
}

@Injectable()
export class StateService {

  private reactiveState = new BehaviorSubject<State>({
    movies: [],
    fromYear: 0,
    toYear: 9999,
  });
  state = this.reactiveState.asObservable();

  constructor() { }

  setState(nextState: State) {
    const currentState = this.reactiveState.value;
    this.reactiveState.next({ ...currentState, ...nextState});
  }

}
