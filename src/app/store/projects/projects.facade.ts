import {Injectable} from '@angular/core';
import * as fromProjects from './index';
import {select, Store} from '@ngrx/store';
import {State} from '@app/main-store';
import { loadAllProjects, loadProject } from './projects.actions';

@Injectable()
export class ProjectsStoreFacade {

  allProjects$ = this.store.select(fromProjects.getAllProjects);

  constructor(private store: Store<State>) {}

  loadProjects() {
    this.store.dispatch(loadAllProjects());
  }

  loadProject(id: number) {
    this.store.dispatch(loadProject({payload: id}));
  }

  getProject(id: number) {
    return this.store.pipe(
      select(fromProjects.getProject(id))
    );
  }

}
