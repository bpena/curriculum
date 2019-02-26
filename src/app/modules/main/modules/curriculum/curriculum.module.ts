import { CurriculumService } from './services/curriculum.service';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CurriculumRoutingModule } from './curriculum-routing.module';
import { CurriculumEditComponent } from './views/curriculum-edit/curriculum-edit.component';
import { CurriculumViewComponent } from './views/curriculum-view/curriculum-view.component';
import { CurriculumDetailComponent } from './views/curriculum-detail/curriculum-detail.component';

@NgModule({
    declarations: [CurriculumEditComponent, CurriculumViewComponent, CurriculumDetailComponent],
    imports: [
        CommonModule,
        CurriculumRoutingModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
    providers: [ CurriculumService ]
})
export class CurriculumModule { }
