import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromProjects from './projects/projects.reducer';
import * as fromUi from './ui/ui.reducer';
import * as fromExperiences from './experiences/experiences.reducer';

export interface State {
  experiences: fromExperiences.State;
  projects: fromProjects.State;
  ui: fromUi.State;
}

export const reducers: ActionReducerMap<State> = {
  experiences: fromExperiences.reducer,
  projects: fromProjects.reducer,
  ui: fromUi.reducer
};

export const getUiState = createFeatureSelector<fromUi.State>('ui');
export const isSideNavOpen = createSelector(getUiState, fromUi.isSideNavOpen);
export const getTitle = createSelector(getUiState, fromUi.getTitle);
