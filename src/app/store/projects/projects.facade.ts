import {Injectable} from '@angular/core';
import * as fromProjects from './index';
import {select, Store} from '@ngrx/store';
import {State} from '@app/main-store';

@Injectable()
export class ProjectsStoreFacade {

  allProjects$ = this.store.select(fromProjects.getAllProjects);

  constructor(private store: Store<State>) {}

  getProject(id: number) {
    return this.store.pipe(
      select(fromProjects.getProject(id))
    );
  }

}
