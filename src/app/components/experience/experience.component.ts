import { Component, Input } from '@angular/core';
import { Experience } from 'src/app/models/experience.model';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.sass']
})
export class ExperienceComponent {

  @Input() experience: Experience;
  @Input() displayActions = true;
}
