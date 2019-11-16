import { Component, OnInit } from '@angular/core';
import { ProjectsStoreFacade } from '@app/main-store/projects/projects.facade';
import { map } from 'rxjs/operators';
import { PROJECT_TYPE } from 'src/app/models/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass']
})
export class ProjectsComponent implements OnInit {

  projects$ = this.projectsFacade.allProjects$;
  schoolProjects$ = this.projects$.pipe(
    map(projects => projects.filter(p => p.type === PROJECT_TYPE.ACADEMIC))
  );
  workProjects$ = this.projects$.pipe(
    map(projects => projects.filter(p => p.type === PROJECT_TYPE.PRO))
  );

  constructor(private projectsFacade: ProjectsStoreFacade) { }

  ngOnInit() {
    this.projectsFacade.loadProjects();
  }

}
