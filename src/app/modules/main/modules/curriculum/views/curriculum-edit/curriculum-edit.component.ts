import { NETWORK } from './../../utilities/network';
import { MONTHS } from './../../utilities/month';
import { CurriculumService } from './../../services/curriculum.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Curriculum from '../../models/curriculum';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { isNullOrUndefined } from 'util';

@Component({
    selector: 'app-curriculum-edit',
    templateUrl: './curriculum-edit.component.html',
    styleUrls: ['./curriculum-edit.component.scss']
})
export class CurriculumEditComponent implements OnInit {

    public cvForm: FormGroup;
    public months = MONTHS;
    public netwotks = NETWORK;
    public years = Array.from(Array(100).keys()).map(v => (new Date()).getFullYear() - v);

    private currentTab: any = 0;
    @ViewChild('staticTabs') staticTabs: TabsetComponent;

    constructor(private formBuilder: FormBuilder,
        private curriculumService: CurriculumService,
        private route: ActivatedRoute,
        private router: Router) {
        this.createForm();
    }

    private disableTabs() {
        this.staticTabs.tabs.forEach(tab => tab.disabled = true);
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
            _id: [''],
            __v: [''],
            firstname: ['', Validators.required],
            lastname: ['', Validators.required],
            email: ['', Validators.required],
            phone: ['', Validators.required],
            address: ['', Validators.required],
            summary: ['', Validators.required],
            degrees: this.formBuilder.array([]),
            jobs: this.formBuilder.array([]),
            skills: this.formBuilder.array([]),
            hobbies: this.formBuilder.array([]),
            networks: this.formBuilder.array([])
        })
    }

    ngOnInit() {
        this.disableTabs();
        this.route.params.subscribe(params => {
            this.curriculumService.getCurriculum(params['id'])
                .subscribe(result => {
                    this.fillFields(result);
                })
        })
    }

    private fillFields(curriculum: Curriculum) {
        if (!isNullOrUndefined(curriculum)) {
            this.cvForm.patchValue(curriculum);
            curriculum.jobs.forEach(job => (this.cvForm.get('jobs') as FormArray).push(this.formBuilder.group(job)));
            curriculum.degrees.forEach(degree => (this.cvForm.get('degrees') as FormArray).push(this.formBuilder.group(degree)));
            curriculum.skills.forEach(skill => (this.cvForm.get('skills') as FormArray).push(this.formBuilder.group(skill)));
            curriculum.hobbies.forEach(hobbie => (this.cvForm.get('hobbies') as FormArray).push(this.formBuilder.group(hobbie)));
            curriculum.networks.forEach(network => (this.cvForm.get('networks') as FormArray).push(this.formBuilder.group(network)));
        }
        else {
            this.addJob();
        }
    }

    save() {
        const id = this.cvForm.get('_id').value;
        if (id !== '')
            this.curriculumService.updateCurriculum(id, this.cvForm.value)
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

    private createDegree() {
        return this.formBuilder.group({
            startYear: ['', Validators.required],
            endYear: ['', Validators.required],
            institute: ['', Validators.required],
            address: ['', Validators.required],
            title: ['', Validators.required]
        })
    }

    addDegree() {
        (this.cvForm.get('degrees') as FormArray).push(this.createDegree());
    }

    private createJob() {
        return this.formBuilder.group({
            company: ['', Validators.required],
            startMonth: [''],
            startYear: ['', Validators.required],
            endMonth: [''],
            endYear: [''],
            position: ['', Validators.required],
            description: ['', Validators.required]
        });
    }

    addJob() {
        (this.cvForm.get('jobs') as FormArray).push(this.createJob());
    }

    private createSkill() {
        return this.formBuilder.group({
            name: ['', Validators.required],
            level: ['', Validators.required]
        })
    }

    addSkill() {
        (this.cvForm.get('skills') as FormArray).push(this.createSkill());
    }

    private createHobbie() {
        return this.formBuilder.group({
            hobbie: ['', Validators.required]
        })
    }

    addHobbie() {
        (this.cvForm.get('hobbies') as FormArray).push(this.createHobbie());
    }

    private createNetwork() {
        return this.formBuilder.group({
            name: ['', Validators.required],
            icon: ['', Validators.required],
            url: ['', Validators.required]
        })
    }

    addNetwork() {
        (this.cvForm.get('networks') as FormArray).push(this.createNetwork());
    }

    removeFormArrayItem(formArrayName: string, index: number) {
        (this.cvForm.get(formArrayName) as FormArray).removeAt(index);
    }
}
