import { ViewModel } from '@dcs/ngx-tools';

export interface I<%= classify(name) %> {
  id: string | null;
}

export class <%= classify(name) %> extends ViewModel<I<%= classify(name) %>> implements I<%= classify(name) %> {
  protected static readonly defaults = {
    id: '',
  };

  public readonly id: string | null;

  constructor(props: Partial<I<%= classify(name) %>> = {}) {
    props = { ...<%= classify(name) %>.defaults, ...props };
    super(props);
  }
}

