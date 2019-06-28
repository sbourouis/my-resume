import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Project} from '@app/main-store/models/project.model';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http: HttpClient) { }

  loadAllProjects() {
    return this.http.get<Project[]>(`${environment.apiConfig.baseUrl}/projects`);
  }

  loadProject(id: number) {
    return this.http.get<Project[]>(`${environment.apiConfig.baseUrl}/projects/${id}`);
  }
}
