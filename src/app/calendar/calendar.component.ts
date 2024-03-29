import { Component, ViewChild } from '@angular/core';
import { CalendarOptions  } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {
  @ViewChild('calendar') calendarComponent: any;

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    events: [
      { title: 'Event 1', date: '2024-02-18' },
      { title: 'Event 2', date: '2024-02-20' }
    ],
    plugins: [dayGridPlugin]
  };

  handleDateClick(arg: any ) {
    console.log(arg);
    alert('date click! ' + arg.dateStr)
  }
}
