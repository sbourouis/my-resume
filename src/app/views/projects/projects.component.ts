import { Component, OnInit } from '@angular/core';
import { ProjectsStoreFacade } from '@app/main-store/projects/projects.facade';
import { map } from 'rxjs/operators';
import { PROJECT_TYPE } from 'src/app/models/project.model';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass']
})
export class ProjectsComponent implements OnInit {

  projects$ = this.projectsFacade.allProjects$;
  filters$ = new BehaviorSubject({
    keywords: [],
    experienceId: null
  });
  filteredProjects$ = combineLatest([this.projects$, this.filters$]).pipe(
    map(([projects, filters]) => projects.filter(project => {
      let bool = true;
      if (filters.experienceId) {
        bool = bool && project.experienceId === filters.experienceId;
      }
      if (filters.keywords && filters.keywords.length) {
        bool = bool && filters.keywords
        .map(keyword => project.keywords.includes(keyword))
        .reduce((a, c) => a && c);
      }
      return bool;
    }))
  );
  schoolProjects$ = this.filteredProjects$.pipe(
    map(projects => projects.filter(p => p.type === PROJECT_TYPE.ACADEMIC))
  );
  workProjects$ = this.filteredProjects$.pipe(
    map(projects => projects.filter(p => p.type === PROJECT_TYPE.PRO))
  );

  isSMLayout$ = this.breakpointObserver.observe([
    Breakpoints.Small,
    Breakpoints.XSmall
  ]).pipe(
    map(res => res.matches)
  );

  constructor(private projectsFacade: ProjectsStoreFacade,
              private activatedRoute: ActivatedRoute,
              private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    this.projectsFacade.loadProjects();
    this.activatedRoute.queryParams.subscribe(params => {
      this.filters$.next({
        experienceId: +params.experienceId,
        keywords: typeof params.keywords === 'string' ? params.keywords.split(',') : params.keywords
      });
    });
  }

}
