import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FullCalendarModule } from '@fullcalendar/angular';
import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { AngularCalendarComponent } from './angular-calendar/angular-calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    AngularCalendarComponent
  ],
  imports: [
    BrowserModule,
    FullCalendarModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
