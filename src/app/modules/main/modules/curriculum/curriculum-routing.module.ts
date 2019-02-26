import { CurriculumViewComponent } from './views/curriculum-view/curriculum-view.component';
import { CurriculumEditComponent } from './views/curriculum-edit/curriculum-edit.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'view',
        component: CurriculumViewComponent
    },
    {
        path: 'new',
        component: CurriculumEditComponent
    },
    {
        path: 'edit/:id',
        component: CurriculumEditComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CurriculumRoutingModule { }
