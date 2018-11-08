import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { APP_ENVIRONMENT } from '@dcs/ngx-tools';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { <%=classify(name) %>Dto } from './<%= dasherize(name) %>.reducer';
import {
  <%=classify(name)%>ActionTypes,
  Load<%=classify(name) %>Success,
  Load<%=classify(name) %>Error,
} from './<%= dasherize(name) %>.actions';

@Injectable()
export class <%=classify(name) %>Effects {
  @Effect()
  load<%=classify(name) %>$ = this.actions$.pipe(
    ofType(<%=classify(name) %>ActionTypes.Load<%=classify(name) %>),
    map((action: any) => action.payload),
    switchMap(_payload => {
      return this.http
        .get <<%=classify(name) %>Dto[]>(`${this.env.apiUrl}/service/url/?use_payload_as_param`)
        .pipe(
          map(data => new Load<%=classify(name) %>Success(data)),
          catchError(e => of(new Load<%=classify(name) %>Error(e)))
        );
    })
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    @Inject(APP_ENVIRONMENT) private env: any
  ) { }
}
