import { schema } from 'normalizr';
import { State } from '../../index';
import { current<%= classify(name) %>Manager } from '../current-<%= dasherize(name) %>/current-<%= dasherize(name) %>.manager';
import { I<%= classify(name) %>, <%= classify(name) %> } from '../models/<%= dasherize(name) %>.class';
import {
  crudCollectionManagerFactory,
  INormalizedCollectionState,
  generateNormalizedCollectionState,
} from '@dcs/ngx-tools';

export interface I<%= classify(name) %>sListState extends INormalizedCollectionState {
  entities: { <%= camelize(name) %>s: { [key: string]: I<%= classify(name) %> } };
}

const initialState = generateNormalizedCollectionState<I<%= classify(name) %>sListState>({ <%= camelize(name) %>s: {} });

const <%= camelize(name) %>sSchema = new schema.Array(current<%= classify(name) %>Manager.schema);

const <%= camelize(name) %>sListStateSelector = (state: State): I<%= classify(name) %>sListState => state.<%= camelize(name) %>s.<%= camelize(name) %>sList;

export const <%= camelize(name) %>sListManager = crudCollectionManagerFactory(
  '<%= classify(name) %>s List',
  '<%= camelize(name) %>s',
  initialState,
  current<%= classify(name) %>Manager.actions,
  <%= camelize(name) %>sListStateSelector,
  <%= camelize(name) %>sSchema,
  <%= classify(name) %>
);
