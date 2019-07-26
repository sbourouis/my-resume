import {Injectable} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {getTitle, isSideNavOpen} from '@app/main-store';
import {State} from '@app/main-store';
import {closeSideNav, openSideNav, resetTitle, setTitle, toggleSideNav} from '@app/main-store/ui/ui.actions';

@Injectable()
export class UiFacade {
  isNavBarOpen$ = this.store.pipe(
    select(isSideNavOpen)
  );

  title$ = this.store.pipe(
    select(getTitle)
  );

  constructor(private store: Store<State>) {}

  openSideNav() {
    this.store.dispatch(openSideNav());
  }

  closeSideNav() {
    this.store.dispatch(closeSideNav());
  }

  toggleSideNav() {
    this.store.dispatch(toggleSideNav());
  }

  setTitle(title: string) {
    this.store.dispatch(setTitle({ payload: { title } }));
  }

  resetTitle() {
    this.store.dispatch(resetTitle());
  }
}
