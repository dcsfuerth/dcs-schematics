import { Action } from '@ngrx/store';
import { <%= camelize(name) %>sListManager, I<%= classify(name) %>sListState } from './<%= dasherize(name) %>s-list.manager';

export const <%= camelize(name) %>sList = (
  state: I<%= classify(name) %>sListState = <%= camelize(name) %>sListManager.initialState,
  action: Action
): I<%= classify(name) %>sListState => {
  switch (
    action.type
    // overwrite or add any actions here, just default redux
  ) {
  }

  return <%= camelize(name) %>sListManager.reducer(state, action);
};
