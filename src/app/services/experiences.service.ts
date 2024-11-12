import { HttpClient } from '@angular/common/http';
import { Experience } from '../models/experience.model';
import { environment } from 'src/environments/environment';
import { of, Observable } from 'rxjs';
import { experiences } from 'src/assets/data/experiences';
import { Injectable } from '@angular/core';

@Injectable()
export class ExperiencesService {
    constructor(private http: HttpClient) { }

    loadExperiences(): Observable<Experience[]> {
        // return this.http.get<Experience[]>(`${environment.apiConfig.baseUrl}/experiences`);
        return of(experiences);
    }

    loadExperience(id: number): Observable<Experience> {
        // return this.http.get<Experience[]>(`${environment.apiConfig.baseUrl}/experiences`);
        return of(experiences.find(e => e.id === id));
    }
}
