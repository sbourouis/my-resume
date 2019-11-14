import {createReducer, on, Action} from '@ngrx/store';
import {closeSideNav, setTitle, openSideNav, toggleSideNav, resetTitle} from '@app/main-store/ui/ui.actions';
import {setState} from '../../helpers/ngrx.helper';

export interface State {
  isSideNavOpen: boolean;
  title: string;
}

export const initialState: State = {
  isSideNavOpen: false,
  title: 'Sabrina Bourouis'
};

export const uiReducer = createReducer<State>(
  initialState,
  on(openSideNav, (state) =>
    setState({
      isSideNavOpen: true
    }, state)
  ),
  on(closeSideNav, (state) =>
    setState({
      isSideNavOpen: false
    }, state)
  ),
  on(toggleSideNav, (state) =>
    setState({
      isSideNavOpen: !state.isSideNavOpen
    }, state)
  ),
  on(setTitle, (state, { payload: { title } }) =>
    setState({
      title
    }, state)),
  on(resetTitle, state =>
    setState({
      title: initialState.title
    }, state))
);

export function reducer(state: State | undefined, action: Action) {
  return uiReducer(state, action);
}

export const isSideNavOpen = (state: State) => state.isSideNavOpen;
export const getTitle = (state: State) => state.title;
