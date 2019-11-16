import {Project} from '../../models/project.model';
import {createEntityAdapter, EntityState} from '@ngrx/entity';
import {createReducer, on, Action} from '@ngrx/store';
import {loadAllProjectsSuccess, loadProjectSuccess} from './projects.actions';

export const projectsAdapter = createEntityAdapter<Project>({
  selectId: (project) => project.id
});

export interface State extends EntityState<Project> {}

export const initialState = projectsAdapter.getInitialState();

export const projectsReducer = createReducer<State>(
  initialState,
  on(loadAllProjectsSuccess, (state, {payload: projects}) =>
    projectsAdapter.addAll(projects, state)
  ),
  on(loadProjectSuccess, (state, {payload: project}) =>
    projectsAdapter.addOne(project, state)
  )
);

export function reducer(state: State | undefined, action: Action) {
  return projectsReducer(state, action);
}

export const {
  selectAll: getAllProjects
} = projectsAdapter.getSelectors();

export const getProjectById = (id: number) => (state: State) => state.entities[id];
export const getProjectByExperienceId = (id: number) => (state: State) =>
getAllProjects(state).filter(p => p.experienceId === id);

