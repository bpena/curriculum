import { CurriculumDetailComponent } from './views/curriculum-detail/curriculum-detail.component';
import { CurriculumViewComponent } from './views/curriculum-view/curriculum-view.component';
import { CurriculumEditComponent } from './views/curriculum-edit/curriculum-edit.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', component: CurriculumViewComponent },
    { path: 'view', component: CurriculumViewComponent },
    { path: 'new', component: CurriculumEditComponent },
    { path: 'edit/:id', component: CurriculumEditComponent },
    { path: 'detail/:id', component: CurriculumDetailComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CurriculumRoutingModule { }
