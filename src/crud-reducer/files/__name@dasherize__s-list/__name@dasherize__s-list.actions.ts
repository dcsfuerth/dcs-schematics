import { ApiGetRequest } from '@dcs/ngx-tools';
import { <%= camelize(name) %>sListManager } from './<%= dasherize(name) %>s-list.manager';

export class Fetch<%= classify(name) %>sList extends ApiGetRequest {
  constructor() {
    super('<%= camelize(name) %>s', <%= camelize(name) %>sListManager.actions.fetch.base, <%= camelize(name) %>sListManager.schema);
  }
}
