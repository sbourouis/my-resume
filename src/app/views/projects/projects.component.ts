import { Component, OnInit } from '@angular/core';
import { ProjectsStoreFacade } from '@app/main-store/projects/projects.facade';
import { map, distinctUntilChanged } from 'rxjs/operators';
import { PROJECT_TYPE } from 'src/app/models/project.model';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { ExperiencesStoreFacade } from '@app/main-store/experiences/experiences.facade';
import { FormControl } from '@angular/forms';

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
  experiences$ = this.experiencesFacade.allExperiences$;
  experienceFilterControl = new FormControl(null);

  isSMLayout$ = this.breakpointObserver.observe([
    Breakpoints.Small,
    Breakpoints.XSmall
  ]).pipe(
    map(res => res.matches)
  );

  constructor(private projectsFacade: ProjectsStoreFacade,
              private experiencesFacade: ExperiencesStoreFacade,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    this.experiencesFacade.loadExperiences();
    this.projectsFacade.loadProjects();
    this.experienceFilterControl.setValue(+this.activatedRoute.snapshot.queryParams.experienceId);
    this.activatedRoute.queryParams.subscribe(params => {
      this.filters$.next({
        experienceId: +params.experienceId,
        keywords: typeof params.keywords === 'string' ? params.keywords.split(',') : params.keywords
      });
    });
    this.experienceFilterControl.valueChanges.pipe(
      distinctUntilChanged()
    ).subscribe(experienceId => this.router.navigate([], {
      queryParams: {...this.activatedRoute.snapshot.queryParams, experienceId},
      relativeTo: this.activatedRoute,
    }));
  }

  onKeywordClicked(keyword: string) {
    let keywords = this.activatedRoute.snapshot.queryParams.keywords;
    keywords = typeof(keywords) === 'string' ? keywords.split(',') : Array.isArray(keywords) ? keywords : [];
    if (!keywords.includes(keyword)) {
      this.router.navigate([], {
        queryParams: {...this.activatedRoute.snapshot.queryParams, keywords: [...keywords, keyword].join(',')},
        relativeTo: this.activatedRoute,
      });
    }
  }

  onKeywordRemoved(keyword: string) {
    let keywords = this.activatedRoute.snapshot.queryParams.keywords;
    keywords = typeof(keywords) === 'string' ? keywords.split(',') : keywords;
    keywords.splice(keywords.indexOf(keyword), 1);
    this.router.navigate([], {
      queryParams: {
        ...this.activatedRoute.snapshot.queryParams,
        keywords: keywords.length ? keywords.join(',') : null
      },
      relativeTo: this.activatedRoute
    });
  }

}
