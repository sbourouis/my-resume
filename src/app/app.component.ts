import { Component } from '@angular/core';
import {UiFacade} from '@app/main-store/ui/ui.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  isSideNavOpen$ = this.uiFacade.isNavBarOpen$;
  title$ = this.uiFacade.title$;

  constructor(private uiFacade: UiFacade) {}

  closeSidenav() {
    this.uiFacade.closeSideNav();
  }

  onSideNavToggle() {
    this.uiFacade.toggleSideNav();
  }
}
