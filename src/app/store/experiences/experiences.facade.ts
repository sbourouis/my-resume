import {Injectable} from '@angular/core';
import * as fromRoot from '../index';
import {select, Store} from '@ngrx/store';
import {State} from '@app/main-store';
import { loadAllExperiences, loadExperience } from './experiences.actions';
import { Experience } from 'src/app/models/experience.model';
import { Observable } from 'rxjs';

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

  getExperienceById(id: number): Observable<Experience> {
    return this.store.pipe(
      select(fromRoot.getExperienceById(id))
    );
  }

}
