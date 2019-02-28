import { ActivatedRoute } from '@angular/router';
import { CurriculumService } from './../../services/curriculum.service';
import { Component, OnInit } from '@angular/core';
import Curriculum from '../../models/curriculum';

@Component({
    selector: 'app-curriculum-detail',
    templateUrl: './curriculum-detail.component.html',
    styleUrls: ['./curriculum-detail.component.scss']
})
export class CurriculumDetailComponent implements OnInit {
    curriculum: Curriculum;

    constructor(private curriculumService: CurriculumService,
        private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.curriculumService.getCurriculum(params['id'])
                .subscribe(cv => this.curriculum = cv);
        })
    }

    getHobbies() {
        return this.curriculum ? this.curriculum.hobbies.map(hobbie => hobbie.hobbie).join(' + ') : '';
    }

}
