import {Experience} from '../../models/Experience.model';
import {createAction, props} from '@ngrx/store';

export const loadExperience = createAction(
  '[Video Stats] Load',
  props<{payload: number}>()
);

export const loadExperienceSuccess = createAction(
  '[Experiences] Load success',
  props<{payload: Experience}>()
);

export const loadAllExperiences = createAction(
  '[Experiences] Load all'
);

export const loadAllExperiencesSuccess = createAction( // replaces existing results
  '[Experiences] Load All success',
  props<{payload: Experience[]}>()
);