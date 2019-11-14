import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import {
  loadAllExperiences,
  loadAllExperiencesSuccess,
  loadExperience,
  loadExperienceSuccess
} from '@app/main-store/experiences/experiences.actions';
import {extractPayload, toPayload} from '../../helpers/ngrx.helper';
import {map, switchMap, tap} from 'rxjs/operators';
import {ExperiencesService} from '../../services/experiences.service';

@Injectable()
export class ExperiencesEffects {

  loadAll$ = createEffect(() => this.actions$.pipe(
    ofType(loadAllExperiences),
    switchMap( _ => this.experiencesService.loadExperiences().pipe(
        tap(console.log),
      toPayload(),
      map(loadAllExperiencesSuccess)
    ))
  ));

  load$ = createEffect( () => this.actions$.pipe(
    ofType(loadExperience),
    extractPayload(),
    switchMap( id => this.experiencesService.loadExperience(id).pipe(
      toPayload(),
      map(loadExperienceSuccess)
    ))
  ));

  constructor(
    private actions$: Actions,
    private experiencesService: ExperiencesService
  ) {}
}
