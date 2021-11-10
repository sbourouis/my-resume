import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Project} from '../models/project.model';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http: HttpClient) { }

  loadAllProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${environment.apiConfig.baseUrl}/projects`, {
      params: {
        'filter[include][]': 'resources'
      }
    });
  }

  loadProject(id: number): Observable<Project> {
    return this.http.get<Project>(`${environment.apiConfig.baseUrl}/projects/${id}`, {
      params: {
        'filter[include][0]': 'resources'
      }
    });
  }
}
