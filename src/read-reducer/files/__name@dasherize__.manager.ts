import { State } from '..';
import { schema } from 'normalizr';
import { I<%= classify(name) %>, <%= classify(name) %> } from './models/<%= dasherize(name) %>.class';
import {
  INormalizedCollectionState,
  generateNormalizedCollectionState,
  readOnlyCollectionManagerFactory,
} from '@dcs/ngx-tools';

export interface I<%= classify(name) %>sState extends INormalizedCollectionState {
  entities: { <%= camelize(name) %>s: { [key: string]: I<%= classify(name) %> } };
}

const initialState = generateNormalizedCollectionState<I<%= classify(name) %>sState>({ <%= camelize(name) %>s: {} });

const <%= camelize(name) %>Schema = new schema.Entity(
  '<%= camelize(name) %>s',
  {},
  {
    idAttribute(entity) {
      return String(entity.id);
    },
  }
);

const <%= camelize(name) %>sSchema = new schema.Array(<%= camelize(name) %>Schema);

export const <%= camelize(name) %>sStateSelector = (state: State): I<%= classify(name) %>sState => state.<%= camelize(name) %>s;

export const <%= camelize(name) %>sManager = readOnlyCollectionManagerFactory(
  '<%= camelize(name) %>s',
  initialState,
  <%= camelize(name) %>sStateSelector,
  <%= camelize(name) %>sSchema,
  <%= classify(name) %>
);
