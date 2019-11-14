import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Experience, EXPERIENCE_TYPE } from 'src/app/models/experience.model';
import { map } from 'rxjs/operators';
import { ExperiencesStoreFacade } from '@app/main-store/experiences/experiences.facade';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {

  experiences$: Observable<Experience[]> = this.experiencesFacade.allExperiences$;
  schoolExperiences$ = this.experiences$.pipe(
    map(experiences => experiences
      .filter(e => e.type === EXPERIENCE_TYPE.SCHOOL)
      .sort((a, b) => new Date(a.fromDate) > new Date(b.fromDate) ? -1 : 1)
    ),
  );
  workExperiences$ = this.experiences$.pipe(
    map(experiences => experiences
      .filter(e => e.type === EXPERIENCE_TYPE.WORK)
      .sort((a, b) => new Date(a.fromDate) > new Date(b.fromDate) ? -1 : 1)
    )
  );

  isSMLayout$ = this.breakpointObserver.observe([
    Breakpoints.Small,
    Breakpoints.XSmall
  ]).pipe(
    map(res => res.matches)
  );

  constructor(private experiencesFacade: ExperiencesStoreFacade,
              private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    this.experiencesFacade.loadExperiences();
  }

}
