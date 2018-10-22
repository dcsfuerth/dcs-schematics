import { State } from '..';
import { I<%= classify(name) %>, <%= classify(name) %> } from './models/<%= dasherize(name) %>.class';
import { ISimpleCollectionState, createSimpleCollectionManager } from '@dcs/ngx-tools';

export type I<%= classify(name) %>sState = ISimpleCollectionState < I<%= classify(name) %>>;

export const <%= camelize(name) %>sStateSelector = (state: State) => state.<%= camelize(name) %>s;

export const <%= camelize(name) %>sManager = createSimpleCollectionManager < State, I<%= classify(name) %>, <%= classify(name) %>> (
  '[<%= classify(name) %>] Fetch',
  <%= camelize(name) %>sStateSelector,
    <%= classify(name) %>
);
