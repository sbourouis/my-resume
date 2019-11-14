import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import {loadAllProjects, loadAllProjectsSuccess, loadProject, loadProjectSuccess} from '@app/main-store/projects/projects.actions';
import {extractPayload, toPayload} from '../../helpers/ngrx.helper';
import {map, switchMap} from 'rxjs/operators';
import {ProjectsService} from '../../services/projects.service';

@Injectable()
export class ProjectsEffects {

  loadAll$ = createEffect( () => this.actions$.pipe(
    ofType(loadAllProjects),
    switchMap( _ => this.projectsService.loadAllProjects().pipe(
      toPayload(),
      map(loadAllProjectsSuccess)
    ))
  ));

  load$ = createEffect( () => this.actions$.pipe(
    ofType(loadProject),
    extractPayload(),
    switchMap( id => this.projectsService.loadProject(id).pipe(
      toPayload(),
      map(loadProjectSuccess)
    ))
  ));

  constructor(
    private actions$: Actions,
    private projectsService: ProjectsService
  ) {}
}
