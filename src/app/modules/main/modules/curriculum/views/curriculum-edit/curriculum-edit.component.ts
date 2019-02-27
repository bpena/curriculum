import { CurriculumService } from './../../services/curriculum.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Curriculum from '../../models/curriculum';
import { TabsetComponent } from 'ngx-bootstrap/tabs';

@Component({
    selector: 'app-curriculum-edit',
    templateUrl: './curriculum-edit.component.html',
    styleUrls: ['./curriculum-edit.component.scss']
})
export class CurriculumEditComponent implements OnInit {

    public curriculum: any = {};
    public cvForm: FormGroup;

    private currentTab: any = 0;
    @ViewChild('staticTabs') staticTabs: TabsetComponent;

    constructor(private formBuilder: FormBuilder,
        private curriculumService: CurriculumService,
        private route: ActivatedRoute,
        private router: Router) {
        this.createForm();
    }

    disableEnable() {
        this.staticTabs.tabs[1].disabled = !this.staticTabs.tabs[2].disabled;
    }

    gotoPrev() {
        this.staticTabs.tabs[this.currentTab--].disabled = true;
        this.staticTabs.tabs[this.currentTab].disabled = false;
        this.staticTabs.tabs[this.currentTab].active = true;
    }

    gotoNext() {
        console.log(this.cvForm.value);
        this.staticTabs.tabs[this.currentTab++].disabled = true;
        this.staticTabs.tabs[this.currentTab].disabled = false;
        this.staticTabs.tabs[this.currentTab].active = true;
    }

    createForm() {
        this.cvForm = this.formBuilder.group({
            general: this.formBuilder.group({
                firstname: ['', Validators.required],
                lastname: ['', Validators.required],
                email: ['', Validators.required],
                phone: ['', Validators.required],
                address: ['', Validators.required],
                summary: ['', Validators.required]
            })
        })
    }

    ngOnInit() {
        this.disableEnable();
        this.route.params.subscribe(params => {
            this.curriculumService.getCurriculum(params['id'])
                .subscribe(result => {
                    this.curriculum = result || {};
                })
        })
    }

    save() {
        if (this.curriculum && this.curriculum._id)
            this.curriculumService.updateCurriculum(this.curriculum)
                .subscribe(result => {
                    console.log('Updated', result);
                    this.router.navigate(['curriculum']);
                });
        else
            this.curriculumService.addCurriculum(this.cvForm.value)
                .subscribe(result => {
                    console.log('Added', result);
                    this.router.navigate(['curriculum']);
                });
    }

}
