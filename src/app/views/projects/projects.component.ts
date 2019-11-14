import { Component, OnInit } from '@angular/core';
import { ProjectsStoreFacade } from '@app/main-store/projects/projects.facade';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass']
})
export class ProjectsComponent implements OnInit {

  projects$ = this.projectsFacade.allProjects$;

  constructor(private projectsFacade: ProjectsStoreFacade) { }

  ngOnInit() {
    this.projectsFacade.loadProjects();
  }

}
