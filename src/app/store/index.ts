import {ActionReducerMap} from '@ngrx/store';
import * as fromProjects from './projects/projects.reducer';

export interface State {
  projects: fromProjects.State;
}

export const reducers: ActionReducerMap<State> = {
  projects: fromProjects.reducer
};
