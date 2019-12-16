import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgMaterialModule } from './material-module';
import { FormsModule } from '@angular/forms';
import { DatepickerComponent, DatepickerComponentDialog } from './datepicker/datepicker.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DatepickerComponent,
    DatepickerComponentDialog
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    NgMaterialModule
  ],
  providers: [],
  entryComponents: [DatepickerComponent, DatepickerComponentDialog],
  bootstrap: [AppComponent]
})
export class AppModule { }
