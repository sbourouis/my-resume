import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Experience, EXPERIENCE_TYPE } from 'src/app/models/experience.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {

  // TODO: get experiences from the store
  experiences$: Observable<Experience[]> = of([]);
  schoolExperiences$ = this.experiences$.pipe(
    map(experiences => experiences
      .filter(e => e.type === EXPERIENCE_TYPE.SCHOOL)
      .sort((a, b) => a.fromDate > b.fromDate ? 1 : -1)
    ),
  );
  workExperiences$ = this.experiences$.pipe(
    map(experiences => experiences
      .filter(e => e.type === EXPERIENCE_TYPE.WORK)
      .sort((a, b) => a.fromDate > b.fromDate ? 1 : -1)
    )
  );

  constructor() { }

  ngOnInit() {
  }

}
