import { patchState, signalStore, withMethods, withState } from "@ngrx/signals";
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { addDays, addWeeks, addMonths } from "date-fns";

type CalendarState = {
    view: CalendarView;
    viewDate: Date;
    events: CalendarEvent[];
    locale: string;
};

const initialState: CalendarState = {
    view: CalendarView.Month,
    viewDate: new Date(),
    events: [
        {
            title: 'Has custom class',
            start: new Date(),
            // cssClass: 'my-custom-class',           
            // draggable: true,
        }
    ],
    locale: 'en'
};

export const CalendarStore = signalStore(
    { providedIn: 'root' },
    withState(initialState),
    withMethods((store) => ({
        setView(view: CalendarView) {
            patchState(store, (state) => ({ view }))
        },
        nextView() {
            patchState(store, (state) => ({ viewDate: state.view === CalendarView.Day ? addDays(state.viewDate, 1)  : (state.view === CalendarView.Month ? addMonths(state.viewDate, 1) : addWeeks(state.viewDate, 1)) }))
        },
        previousView() {
            patchState(store, (state) => ({ viewDate: state.view === CalendarView.Day ? addDays(state.viewDate, -1) : (state.view === CalendarView.Month ? addMonths(state.viewDate, -1) : addWeeks(state.viewDate, -1)) }))
        },
        today() {
            patchState(store, (state) => ({ viewDate: new Date() }))
        },
    }))
);