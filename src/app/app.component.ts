import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from './actions/counter.actions';
import { AppState } from './reducers';
import { getCount } from './selectors/counter.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  count$: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.count$ = this.store.pipe(select(getCount));
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  increment() {
    this.store.dispatch(increment());
  }

  reset() {
    this.store.dispatch(reset());
  }

  ngOnInit() {
    this.increment();
  }
}
