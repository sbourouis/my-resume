import {Experience} from '../../models/experience.model';
import {createAction, props} from '@ngrx/store';

export const loadExperience = createAction(
  '[Experiences] Load',
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
