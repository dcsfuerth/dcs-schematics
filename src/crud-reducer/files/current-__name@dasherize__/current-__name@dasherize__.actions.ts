import { Action } from '@ngrx/store';
import { current<%= classify(name) %>Manager } from './current-<%= dasherize(name) %>.manager';
import { <%= classify(name) %> } from '../models/<%= dasherize(name) %>.class';
import {
  ApiGetRequest,
  ApiDeleteRequest,
  ApiPostRequest,
  ApiPutRequest,
} from '@dcs/ngx-tools';

export class FetchCurrent<%= classify(name) %> extends ApiGetRequest {
  constructor(id: string) {
    super(`<%= camelize(name) %>s/${id}`, current<%= classify(name) %>Manager.actions.fetch.base, current<%= classify(name) %>Manager.schema);
  }
}

export class CreateCurrent<%= classify(name) %> extends ApiPostRequest {
  constructor(<%= camelize(name) %>: <%= classify(name) %>) {
    super(
      `<%= camelize(name) %>s`,
      current<%= classify(name) %>Manager.actions.create.base,
      <%= camelize(name) %>.toObject(),
      current<%= classify(name) %>Manager.schema
    );
  }
}

export class UpdateCurrent<%= classify(name) %> extends ApiPutRequest {
  constructor(<%= camelize(name) %>: <%= classify(name) %>) {
    super(
      `<%= camelize(name) %>s/${<%= camelize(name) %>.id}`,
      current<%= classify(name) %>Manager.actions.update.base,
      <%= camelize(name) %>.toObject(),
      current<%= classify(name) %>Manager.schema
    );
  }
}

export class DeleteCurrent<%= classify(name) %> extends ApiDeleteRequest {
  constructor(<%= camelize(name) %>: <%= classify(name) %>) {
    super(`<%= camelize(name) %>s/${<%= camelize(name) %>.id}`, current<%= classify(name) %>Manager.actions.delete.base, <%= camelize(name) %>.toObject());
  }
}

export class ResetCurrent<%= classify(name) %> implements Action {
  readonly type = current<%= classify(name) %>Manager.actions.fetch.reset;
}
