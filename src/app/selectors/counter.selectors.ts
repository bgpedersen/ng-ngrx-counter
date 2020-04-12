import { createSelector } from '@ngrx/store';
import { AppState } from '../reducers';

export const selectCounterState = (state: AppState) => state.counter;

export const getCount = createSelector(
  selectCounterState,
  (counter) => counter.count
);
