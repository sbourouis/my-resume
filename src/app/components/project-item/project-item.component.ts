import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Project, RESOURCE_TYPE, Resource } from 'src/app/models/project.model';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.sass']
})
export class ProjectItemComponent implements OnInit {

  @Input() project: Project;
  @Output() keywordClick = new EventEmitter<string>();
  img: Resource = null;

  constructor() { }

  ngOnInit() {
    this.img = this.project.resources.find(r => r.type === RESOURCE_TYPE.IMG);
  }

}
