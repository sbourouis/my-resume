import {Injectable} from '@angular/core';
import * as fromExperiences from './index';
import {select, Store} from '@ngrx/store';
import {State} from '@app/main-store';
import { loadAllExperiences, loadExperience } from './experiences.actions';

@Injectable()
export class ExperiencesStoreFacade {

  allExperiences$ = this.store.select(fromExperiences.getAllExperiences);

  constructor(private store: Store<State>) {}

  loadExperiences() {
    this.store.dispatch(loadAllExperiences());
  }

  loadExperience(id: number) {
    this.store.dispatch(loadExperience({payload: id}));
  }

  getExperience(id: number) {
    return this.store.pipe(
      select(fromExperiences.getExperience(id))
    );
  }

}
