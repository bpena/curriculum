import { CurriculumService } from './../../services/curriculum.service';
import { Component, OnInit } from '@angular/core';
import Curriculum from '../../models/curriculum';

@Component({
    selector: 'app-curriculum-view',
    templateUrl: './curriculum-view.component.html',
    styleUrls: ['./curriculum-view.component.scss']
})
export class CurriculumViewComponent implements OnInit {

    public curriculum: Curriculum[];

    constructor(private curriculumService: CurriculumService) { }

    ngOnInit() {
        this.curriculumService.getAll()
            .subscribe((data: Curriculum[]) => {
                this.curriculum = data;
            })
    }

    delete(id: String) {
        this.curriculumService.deleteCurriculum(id)
            .subscribe(result => {
                console.log('Deleted');
            })
    }
}
