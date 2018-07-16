import { ApiGetRequest } from '@dcs/ngx-tools';
import { <%= camelize(name) %>sManager } from './<%= dasherize(name) %>.manager';

export class Fetch<%= classify(name) %>s extends ApiGetRequest {
  constructor() {
    super('<%= dasherize(name) %>s', <%= camelize(name) %>sManager.actions.fetch.base, <%= camelize(name) %>sManager.schema);
  }
}
