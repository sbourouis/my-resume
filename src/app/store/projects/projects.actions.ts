import {Project} from '../../models/project.model';
import {createAction, props} from '@ngrx/store';

export const loadProject = createAction(
  '[Video Stats] Load',
  props<{payload: number}>()
);

export const loadProjectSuccess = createAction(
  '[Projects] Load success',
  props<{payload: Project}>()
);

export const loadAllProjects = createAction(
  '[Projects] Load all'
);

export const loadAllProjectsSuccess = createAction( // replaces existing results
  '[Projects] Load All success',
  props<{payload: Project[]}>()
);
