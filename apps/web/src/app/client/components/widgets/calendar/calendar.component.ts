import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'client-calendar',
  templateUrl: './calendar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
