import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Curriculum from '../models/curriculum';

@Injectable({
    providedIn: 'root'
})
export class CurriculumService {

    private url = "http://localhost:4000/api/v1/curriculum";
    
    constructor(private http: HttpClient) { }

    addCurriculum(cv: Curriculum) {
        console.log(cv);

        this.http.post(`${this.url}/add`, cv)
            .subscribe(result => console.log(result));
    }
}
