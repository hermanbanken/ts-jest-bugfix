import { Observable } from "rxjs/Observable";
import { Scheduler } from "rxjs/Scheduler";

import "rxjs/add/observable/defer";
import "rxjs/add/observable/from";
import "rxjs/add/observable/timer";
import "rxjs/add/observable/range";
import "rxjs/add/observable/interval";
import "rxjs/add/observable/merge";
import "rxjs/add/observable/of";
import "rxjs/add/operator/bufferCount";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/concat";
import "rxjs/add/operator/concatMap";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/do";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/groupBy";
import "rxjs/add/operator/map";
import "rxjs/add/operator/merge";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/publish";
import "rxjs/add/operator/scan";
import "rxjs/add/operator/share";
import "rxjs/add/operator/startWith";
import "rxjs/add/operator/take";
import "rxjs/add/operator/takeUntil";
import "rxjs/add/operator/timeout";
import "rxjs/add/operator/toPromise";
import "rxjs/add/operator/zip";

export function box<T>(stuff: T) {
  return [stuff];
}

export class FooBar {
  public obs: Observable<number>
  constructor(scheduler: Scheduler, time: number = 1000) {
    this.obs = Observable
      .interval(time, scheduler)
      .flatMap(() => Observable.of(1)
        .delay(time * 2, scheduler)
        .timeout(time, scheduler)
        .ignoreElements()
        .catch(e => Observable.of(e))
      )
  }

}

