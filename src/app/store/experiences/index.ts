import * as fromExperiences from './experiences.reducer';
import {Action, combineReducers, createFeatureSelector, createSelector} from '@ngrx/store';

export interface State {
  experiences: fromExperiences.State;
}

export function reducers(state: State | undefined, action: Action) {
  return combineReducers({
    experiences: fromExperiences.reducer
  })(state, action);
}


export const getExperiencesRootState = createFeatureSelector<State>('experiences');
export const getExperiencesState = createSelector(getExperiencesRootState, state => state.experiences);
export const getAllExperiences = createSelector(getExperiencesState, fromExperiences.getAllExperiences);
export const getExperience = (id: number) => createSelector(getExperiencesState, fromExperiences.getExperienceById(id));


