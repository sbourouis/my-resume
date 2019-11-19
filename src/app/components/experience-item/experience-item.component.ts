import { Component, Input } from '@angular/core';
import { Experience } from 'src/app/models/experience.model';

@Component({
  selector: 'app-experience-item',
  templateUrl: './experience-item.component.html',
  styleUrls: ['./experience-item.component.sass']
})
export class ExperienceItemComponent {

  @Input() experience: Experience;
  @Input() displayActions = true;
}
