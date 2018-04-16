import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';




import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { PageComponent } from './components/page/page.component';
import { AppRoutingModule } from './app-routing.module';
import { SubjectComponent } from './components/subject/subject.component';
import { FooterComponent } from './components/footer/footer.component';
import { IntakeComponent } from './components/intake/intake.component';
import { PhonghocComponent } from './components/phonghoc/phonghoc.component';
import { MajorComponent } from './components/major/major.component';
import { SchoolComponent } from './components/school/school.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    PageComponent,
    SubjectComponent,
    FooterComponent,
    IntakeComponent,
    PhonghocComponent,
    MajorComponent,
    SchoolComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
