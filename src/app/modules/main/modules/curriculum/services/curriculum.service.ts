import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Curriculum from '../models/curriculum';

@Injectable({
    providedIn: 'root'
})
export class CurriculumService {

    private url = "http://localhost:4000/api/v1/curriculum";
    
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get(this.url);
    }

    getCurriculum(id: String)  {
        return this.http.get<Curriculum>(`${this.url}/${id}`);
    }

    addCurriculum(cv: Curriculum) {
        return this.http.post(this.url, cv);
    }

    updateCurriculum(id: String, cv: Curriculum) {
        return this.http.put(`${this.url}/${id}`, cv);
    }

    deleteCurriculum(id: String) {
        return this.http.delete(`${this.url}/${id}`);
    }

}
