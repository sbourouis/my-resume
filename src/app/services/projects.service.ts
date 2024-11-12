import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../models/project.model';
import { Observable, of } from 'rxjs';
import { projects } from 'src/assets/data/projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http: HttpClient) { }

  loadAllProjects(): Observable<Project[]> {
    // return this.http.get<Project[]>(`${environment.apiConfig.baseUrl}/projects`);
    return of(projects);
  }

  loadProject(id: number): Observable<Project> {
    return of(projects.find(p => p.id === id));
    // return this.http.get<Project>(`${environment.apiConfig.baseUrl}/projects/${id}`);
  }
}
