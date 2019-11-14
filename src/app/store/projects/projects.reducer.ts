import {Project} from '../../models/project.model';
import {createEntityAdapter, EntityState} from '@ngrx/entity';
import {createReducer, on} from '@ngrx/store';
import {loadAllProjectsSuccess, loadProjectSuccess} from './projects.actions';

export const projectsAdapter = createEntityAdapter<Project>({
  selectId: (project) => project.id
});

export interface State extends EntityState<Project> {}

export const initialState = projectsAdapter.getInitialState();

export const reducer = createReducer<State>(
  initialState,
  on(loadAllProjectsSuccess, (state, {payload: projects}) =>
    projectsAdapter.addAll(projects, state)
  ),
  on(loadProjectSuccess, (state, {payload: project}) =>
    projectsAdapter.addOne(project, state)
  )
);

export const {
  selectAll: getAllProjects
} = projectsAdapter.getSelectors();

export const getProjectById = (id: number) => (state: State) => state.entities[id];

