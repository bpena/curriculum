import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurriculumRoutingModule } from './curriculum-routing.module';
import { CurriculumEditComponent } from './views/curriculum-edit/curriculum-edit.component';
import { CurriculumViewComponent } from './views/curriculum-view/curriculum-view.component';

@NgModule({
    declarations: [CurriculumEditComponent, CurriculumViewComponent],
    imports: [
        CommonModule,
        CurriculumRoutingModule
    ]
})
export class CurriculumModule { }
