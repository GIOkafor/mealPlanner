import { Component, effect, inject } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { CalendarStore } from './calendar.store';
import { getState } from '@ngrx/signals';
import { MatDialog } from '@angular/material/dialog';
import { NewItemComponent } from '../new-item/new-item.component';

@Component({
  selector: 'app-angular-calendar',
  templateUrl: './angular-calendar.component.html',
  styleUrls: ['./angular-calendar.component.scss']
})
export class AngularCalendarComponent {
  store = inject(CalendarStore);
  CalendarView = CalendarView;

  constructor(
    private dialog: MatDialog
  ) {
    effect(()=>{
      const state = getState(this.store);
      console.log('Calendar state changed: ', state);
    })
  }

  dayClicked(date: any){
    // console.log("day clicked with date");
    // console.log({date});
    this.openDialog(date);
  }

  dayHeaderClicked(date: any){
    // console.log("day header clicked with value");
    // console.log({date});
  }

  hourSegmentClicked(date: any){
    console.log({date});
  }

  openDialog(date: any): void {
    const dialogRef = this.dialog.open(NewItemComponent, {
      data: {name: 'Super Eagles', animal: 'Eagle', date},
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      // console.log({result});
      // IF RESULT CLOSE + ADD EVENT TO STORE.EVENTS
    });
  }
}
