import { ActionReducer, combineReducers } from '@ngrx/store';

import { ICurrent<%= classify(name) %>State } from './current-<%= dasherize(name) %>/current-<%= dasherize(name) %>.manager';
import { current<%= classify(name) %> } from './current-<%= dasherize(name) %>/current-<%= dasherize(name) %>.reducer';
import { I<%= classify(name) %>sListState } from './<%= dasherize(name) %>s-list/<%= dasherize(name) %>s-list.manager';
import { <%= dasherize(name) %>sList } from './<%= dasherize(name) %>s-list/<%= dasherize(name) %>s-list.reducer';

export interface State {
  current<%= classify(name) %>: ICurrent<%= classify(name) %>State;
  <%= dasherize(name) %>sList: I<%= classify(name) %>sListState;
}

export const reducer: ActionReducer<State> = combineReducers({
  current<%= classify(name) %>,
  <%= dasherize(name) %>sList
});
