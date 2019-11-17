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

export const getProjectsState = createFeatureSelector<fromProjects.State>('projects');
export const {
  selectAll: getAllProjects,
  selectEntities: getProjectEntities
} = fromProjects.projectsAdapter.getSelectors(getProjectsState);

export const getCurrentProjectId = createSelector(
  getProjectsState,
  fromProjects.getCurrentProjectId
);
export const getProject = createSelector(
  getProjectEntities,
  getCurrentProjectId,
  (projects, projectId) => projectId && projects[projectId]
);
export const getProjectByExperienceId = (id: number) => createSelector(getProjectsState, fromProjects.getProjectByExperienceId(id));

export const getExperiencesState = createFeatureSelector<fromExperiences.State>('experiences');
export const getAllExperiences = createSelector(getExperiencesState, fromExperiences.getAllExperiences);
export const getExperienceById = (id: number) => createSelector(
  getExperiencesState,
  fromExperiences.getExperienceById(id)
);
