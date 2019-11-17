import {Project} from '../../models/project.model';
import {createEntityAdapter, EntityState} from '@ngrx/entity';
import {createReducer, on, Action} from '@ngrx/store';
import {loadAllProjectsSuccess, setCurrentProjectId, loadProjectSuccess} from './projects.actions';
import { setState } from 'src/app/helpers/ngrx.helper';

export const projectsAdapter = createEntityAdapter<Project>({
  selectId: (project) => project.id
});

export interface State extends EntityState<Project> {
  projectId: number;
}

export const initialState = projectsAdapter.getInitialState({
  projectId: null
});

export const projectsReducer = createReducer<State>(
  initialState,
  on(loadAllProjectsSuccess, (state, {payload: projects}) =>
    projectsAdapter.addAll(projects, state)
  ),
  on(setCurrentProjectId, (state, { payload: projectId }) =>
    setState({ projectId }, state)
  ),
  on(loadProjectSuccess, (state, {payload: project}) =>
    projectsAdapter.upsertOne(project, state)
  )
);

export function reducer(state: State | undefined, action: Action) {
  return projectsReducer(state, action);
}

export const {
  selectAll: getAllProjects,
  selectEntities: getProjectEntities
} = projectsAdapter.getSelectors();
export const getCurrentProjectId = (state: State) => state.projectId;
export const getProjectById = (id: number) => (state: State) => state.entities[id];
export const getProjectByExperienceId = (id: number) => (state: State) =>
getAllProjects(state).filter(p => p.experienceId === id);

