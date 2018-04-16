import { NgModule } from '@angular/core';
import { enableProdMode } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubjectComponent } from './components/subject/subject.component'
import { PageComponent } from './components/page/page.component';
import { IntakeComponent } from './components/intake/intake.component';
import { PhonghocComponent } from './components/phonghoc/phonghoc.component';
import { MajorComponent } from './components/major/major.component';
import { SchoolComponent } from './components/school/school.component';

enableProdMode();
export const routes: Routes = [
  {path: 'subjects', component: SubjectComponent },
  {path: '',pathMatch: 'full', component: PageComponent},
  {path: 'intakes', component: IntakeComponent },
  {path:'rooms',component:PhonghocComponent},
  {path:'majors',component:MajorComponent},
  {path:'schools',component:SchoolComponent},

];

@NgModule({
  imports:[ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]

})
export class AppRoutingModule {

}
