import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-curriculum-edit',
    templateUrl: './curriculum-edit.component.html',
    styleUrls: ['./curriculum-edit.component.scss']
})
export class CurriculumEditComponent implements OnInit {

    public cvForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {
        this.createForm();
    }

    createForm() {
        this.cvForm = this.formBuilder.group({
            firstname: [ '', Validators.required ],
            lastname: [ '', Validators.required ],
            email: [ '', Validators.required ],
            phone: [ '', Validators.required ],
            address: [ '', Validators.required ],
        })
    }

    ngOnInit() {
    }

}
