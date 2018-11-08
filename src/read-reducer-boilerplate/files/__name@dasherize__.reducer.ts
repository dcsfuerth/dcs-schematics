import { HttpErrorResponse } from '@angular/common/http';
import { <%=classify(name) %>Actions, <%=classify(name) %>ActionTypes } from './<%= dasherize(name) %>.actions';

export interface <%=classify(name) %>Dto {
  id: string | null;
}

export const initialState = {
  entities: [] as <%=classify(name) %>Dto[],
  loading: false,
  loaded: false,
  error: null as null | HttpErrorResponse,
};

export type State = Readonly<typeof initialState>;

export function reducer(state: State = initialState, action: <%=classify(name) %>Actions): State {
  switch (action.type) {
    case <%=classify(name) %>ActionTypes.Load<%=classify(name) %>:
      return { ...initialState, loading: true };

    case <%=classify(name) %>ActionTypes.Load<%=classify(name) %>Success:
      return { ...initialState, entities: action.payload, loaded: true };

    case <%=classify(name) %>ActionTypes.Load<%=classify(name) %>Error:
      return { ...initialState, error: action.payload };

    default:
      return state;
  }
}

