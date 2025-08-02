import { createReducer, on } from '@ngrx/store';
import { setTokenAction } from './TokenAction';

const initValue: string = '';

export const tokenReducer = createReducer(
  initValue,
  on(setTokenAction, (state, action) => {
    state = action.value;
    return state;
  })
);
