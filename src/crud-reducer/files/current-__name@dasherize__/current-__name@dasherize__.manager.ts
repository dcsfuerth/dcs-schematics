import { schema } from 'normalizr';
import { State } from '../../index';
import { I<%= classify(name) %>, <%= classify(name) %> } from '../models/<%= dasherize(name) %>.class';
import {
  crudEntityManagerFactory,
  INormalizedEntityState,
  generateNormalizedEntityState,
} from '@dcs/ngx-tools';

export interface ICurrent<%= classify(name) %>State extends INormalizedEntityState {
  entities: { <%= camelize(name) %>s: { [key: string]: I<%= classify(name) %> } };
}

const initialState = generateNormalizedEntityState<ICurrent<%= classify(name) %>State>({ <%= camelize(name) %>s: {} });

const <%= camelize(name) %>Schema = new schema.Entity(
  '<%= camelize(name) %>s',
  {},
  {
    idAttribute(entity) {
      return String(entity.id);
    },
  }
);

export const current<%= classify(name) %>StateSelector = (state: State): ICurrent<%= classify(name) %>State =>
  state.<%= camelize(name) %>s.current<%= classify(name) %>;

export const current<%= classify(name) %>Manager = crudEntityManagerFactory(
  'Current <%= classify(name) %>',
  initialState,
  current<%= classify(name) %>StateSelector,
  <%= camelize(name) %>Schema,
  <%= classify(name) %>
);
