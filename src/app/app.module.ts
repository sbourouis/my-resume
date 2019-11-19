import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {LoadingBarRouterModule} from '@ngx-loading-bar/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './views/projects/projects.component';
import { AboutComponent } from './views/about/about.component';
import { ContactComponent } from './views/contact/contact.component';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {reducers} from '@app/main-store';
import {HttpClientModule} from '@angular/common/http';
import {ProjectsService} from './services/projects.service';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MaterialCustomModule } from './modules';
import { UiFacade } from './store/ui/ui.facade';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsStoreFacade } from './store/projects/projects.facade';
import { ExperiencesService } from './services/experiences.service';
import { ExperiencesStoreFacade } from './store/experiences/experiences.facade';
import { ExperiencesEffects } from './store/experiences/experiences.effects';
import { ProjectsEffects } from './store/projects/projects.effects';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import { ProjectItemComponent } from './components/project-item/project-item.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ProjectComponent } from './views/project/project.component';
import { GalleryModule } from '@ngx-gallery/core';
import { LightboxModule } from '@ngx-gallery/lightbox';
import { GallerizeModule } from '@ngx-gallery/gallerize';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    AboutComponent,
    ContactComponent,
    NavBarComponent,
    ToolbarComponent,
    ExperienceComponent,
    ProjectItemComponent,
    ProjectListComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    PerfectScrollbarModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    GalleryModule,
    LightboxModule,
    GallerizeModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: true,
      }
    }),
    EffectsModule.forRoot([ExperiencesEffects, ProjectsEffects]),
    StoreDevtoolsModule.instrument(),
    HttpClientModule,
    LoadingBarRouterModule,
    MaterialCustomModule,
    BrowserAnimationsModule
  ],
  providers: [
    ProjectsService,
    UiFacade,
    ProjectsStoreFacade,
    ExperiencesService,
    ExperiencesStoreFacade
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
