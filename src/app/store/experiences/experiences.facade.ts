import {Injectable} from '@angular/core';
import * as fromRoot from '../index';
import {select, Store} from '@ngrx/store';
import {State} from '@app/main-store';
import { loadAllExperiences, loadExperience } from './experiences.actions';

@Injectable()
export class ExperiencesStoreFacade {

  allExperiences$ = this.store.select(fromRoot.getAllExperiences);

  constructor(private store: Store<State>) {}

  loadExperiences() {
    this.store.dispatch(loadAllExperiences());
  }

  loadExperience(id: number) {
    this.store.dispatch(loadExperience({payload: id}));
  }

}
