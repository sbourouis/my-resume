import {Experience} from '../../models/experience.model';
import {createEntityAdapter, EntityState} from '@ngrx/entity';
import {createReducer, on} from '@ngrx/store';
import {loadAllExperiencesSuccess, loadExperienceSuccess} from './experiences.actions';

export const experiencesAdapter = createEntityAdapter<Experience>({
  selectId: (experience) => experience.id
});

export interface State extends EntityState<Experience> {}

export const initialState = experiencesAdapter.getInitialState();

export const reducer = createReducer<State>(
  initialState,
  on(loadAllExperiencesSuccess, (state, {payload: experiences}) =>
    experiencesAdapter.addAll(experiences, state)
  ),
  on(loadExperienceSuccess, (state, {payload: experience}) =>
    experiencesAdapter.addOne(experience, state)
  )
);

export const {
  selectAll: getAllExperiences
} = experiencesAdapter.getSelectors();

export const getExperienceById = (id: number) => (state: State) => state.entities[id];

