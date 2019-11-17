import {Injectable} from '@angular/core';
import * as fromRoot from '../index';
import {select, Store} from '@ngrx/store';
import {State} from '@app/main-store';
import { loadAllProjects, loadProject, setCurrentProjectId } from './projects.actions';

@Injectable()
export class ProjectsStoreFacade {

  project$ = this.store.pipe(select(fromRoot.getProject));
  allProjects$ = this.store.pipe(select(fromRoot.getAllProjects));

  constructor(private store: Store<State>) {}

  loadProjects() {
    this.store.dispatch(loadAllProjects());
  }

  loadProject(id: number) {
    this.store.dispatch(loadProject({payload: id}));
  }

  setCurrentProjectId(id: number) {
    this.store.dispatch(setCurrentProjectId({ payload: id }));
    if (id) {
      this.loadProject(id);
    }
    return this.project$;
  }

}
