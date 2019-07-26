import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {TypedAction} from '@ngrx/store/src/models';

export const toPayload = () => <T>(source: Observable<T>) =>
  source.pipe(
    map(data => ({payload: data}))
  );

export const extractPayload = () => <T>(source: Observable<TypedAction<string> & {payload: T}>) =>
  source.pipe(
    map(action => action.payload)
  );

export const setState = <T>(update: Partial<T>, state: T): T => ({...state, ...update});
