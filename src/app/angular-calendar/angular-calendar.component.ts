import { Component, effect, inject } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { CalendarStore } from './calendar.store';
import { getState } from '@ngrx/signals';

@Component({
  selector: 'app-angular-calendar',
  templateUrl: './angular-calendar.component.html',
  styleUrls: ['./angular-calendar.component.scss']
})
export class AngularCalendarComponent {
  store = inject(CalendarStore);
  CalendarView = CalendarView;

  constructor() {
    effect(()=>{
      const state = getState(this.store);
      console.log('Calendar state changed: ', state);
    })
  }
}
