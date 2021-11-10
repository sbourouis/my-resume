import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Experience } from '../models/experience.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class ExperiencesService {
    constructor(private http: HttpClient) { }

    loadExperiences(): Observable<Experience[]> {
        return this.http.get<Experience[]>(`${environment.apiConfig.baseUrl}/experiences`);
    }

    loadExperience(id: number): Observable<Experience> {
        return this.http.get<Experience>(`${environment.apiConfig.baseUrl}/experiences/${id}`);
    }
}
