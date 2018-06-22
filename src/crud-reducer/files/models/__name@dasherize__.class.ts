import { ViewModel } from '@dcs/ngx-tools';

export interface I<%= classify(name) %> {
  id: string;
}

export class <%= classify(name) %> extends ViewModel<I<%= classify(name) %>> {
  protected static readonly defaults = {
    id: '',
  };

  public id: string;

  constructor(props: Partial<I<%= classify(name) %>>) {
    props = { ...<%= classify(name) %>.defaults, ...props };
    super(props);
  }
}
