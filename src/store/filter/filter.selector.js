import { createSelector } from 'reselect';

const selectFilterReducer = (state) => state.filter;

export const selectFilterVisibility = createSelector(
  [selectFilterReducer],
  (filter) => filter.filter
);
