import { HttpErrorResponse } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { <%=classify(name)%>Dto } from './<%= dasherize(name) %>.reducer';

export enum <%=classify(name) %>ActionTypes {
  Load<%=classify(name)%> = '[<%=classify(name)%>] Load<%=classify(name)%>',
  Load<%=classify(name)%>Success = '[<%=classify(name)%>] Load<%=classify(name)%> Success',
  Load<%=classify(name)%>Error = '[<%=classify(name)%>] Load<%=classify(name)%> Error',
}

export class Load<%=classify(name) %> implements Action {
  readonly type = <%=classify(name) %>ActionTypes.Load<%=classify(name) %>;

  constructor(public payload: any) { }
}

export class Load<%=classify(name) %>Success implements Action {
  readonly type = <%=classify(name) %>ActionTypes.Load<%=classify(name) %>Success;

  constructor(public payload: <%=classify(name) %>Dto[]) { }
}

export class Load<%=classify(name) %>Error implements Action {
  readonly type = <%=classify(name) %>ActionTypes.Load<%=classify(name) %>Error;

  constructor(public payload: HttpErrorResponse) { }
}

export type <%=classify(name) %>Actions = Load<%=classify(name) %> | Load<%=classify(name) %>Success | Load<%=classify(name) %>Error;
