import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsStoreFacade } from '@app/main-store/projects/projects.facade';
import { Subscription, Observable } from 'rxjs';
import { ExperiencesStoreFacade } from '@app/main-store/experiences/experiences.facade';
import { GalleryItem, Gallery, ImageItem, VideoItem, YoutubeItem } from '@ngx-gallery/core';
import { RESOURCE_TYPE, Resource } from 'src/app/models/project.model';
import { Experience } from 'src/app/models/experience.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.sass']
})
export class ProjectComponent implements OnInit, OnDestroy {

  project$ = this.projectsStoreFacade.project$;
  experience$: Observable<Experience>;
  subscriptions: Subscription[] = [];
  items: GalleryItem[] = [];
  links: Resource[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              public gallery: Gallery,
              private experiencesStoreFacade: ExperiencesStoreFacade,
              private projectsStoreFacade: ProjectsStoreFacade) { }

  ngOnInit() {
    const routeSub = this.activatedRoute.params.subscribe(params => {
      this.projectsStoreFacade.setCurrentProjectId(+params.projectId);
    });
    const projectSub = this.project$.subscribe(project => {
      if (project.experienceId) {
        this.experiencesStoreFacade.loadExperience(project.experienceId);
        this.experience$ = this.experiencesStoreFacade.getExperienceById(project.experienceId);
      }
      this.links = project.resources.filter(r => r.type === RESOURCE_TYPE.LINK);
      this.items = project.resources
        .filter(resource => resource.type !== RESOURCE_TYPE.LINK)
        .map(item => item.type === RESOURCE_TYPE.IMG ?
          new ImageItem({ src: item.src, thumb: item.src }) :
          item.type === RESOURCE_TYPE.VIDEO ?
          new VideoItem({ src: item.src, thumb: item.thumb }) :
          new YoutubeItem({ src : item.src }));
    });
    this.subscriptions.push(routeSub, projectSub);
  }

  ngOnDestroy() {
    this.subscriptions.map(s => s.unsubscribe());
  }

}
