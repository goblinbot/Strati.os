import { Injectable } from '@angular/core';
import { Observable, interval, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClockService {

  private clock: Observable<Date>;

  constructor() {
    this.initializeClock();
  }

  private initializeClock(): void {
    this.clock = interval(1000).pipe(
      map(tick => new Date())
    );
  }

  public getClock(): Observable<Date> {
    return this.clock;
  }
}
