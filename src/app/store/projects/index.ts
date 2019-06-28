import * as fromProjects from './projects.reducer';
import {Action, combineReducers, createFeatureSelector, createSelector} from '@ngrx/store';

export interface State {
  projects: fromProjects.State;
}

export function reducers(state: State | undefined, action: Action) {
  return combineReducers({
    projects: fromProjects.reducer
  })(state, action);
}


export const getProjectsRootState = createFeatureSelector<State>('projects');
export const getProjectsState = createSelector(getProjectsRootState, state => state.projects);
export const getAllProjects = createSelector(getProjectsState, fromProjects.getAllProjects);
export const getProject = (id: number) => createSelector(getProjectsState, fromProjects.getProjectById(id));


