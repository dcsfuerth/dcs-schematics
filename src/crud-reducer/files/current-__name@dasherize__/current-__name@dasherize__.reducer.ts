import { Action } from '@ngrx/store';
import { current<%= classify(name) %>Manager, ICurrent<%= classify(name) %>State } from './current-<%= dasherize(name) %>.manager';

export const current<%= classify(name) %> = (
  state: ICurrent<%= classify(name) %>State = current<%= classify(name) %>Manager.initialState,
  action: Action
): ICurrent<%= classify(name) %>State => {
  switch (
    action.type
    // overwrite or add any actions here, just default redux
  ) {
  }

  return current<%= classify(name) %>Manager.reducer(state, action);
};
