import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { AddFormComponent } from './components/add-form/add-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { NgZorroAntdModule } from './ng-zorro-antd.module';
import { CalendarComponent } from './components/calendar/calendar.component';
import { CategoryComponent } from './components/category/category.component';
import { ImportantComponent } from './components/important/important.component';
import { TodoService } from './services/todo.service';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddFormComponent,
    CalendarComponent,
    CategoryComponent,
    ImportantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgZorroAntdModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }, TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
