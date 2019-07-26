import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.sass']
})
export class NavBarComponent {
  @Input() isSideNavOpen = false;
  @Output() sideNavClose = new EventEmitter();
}
