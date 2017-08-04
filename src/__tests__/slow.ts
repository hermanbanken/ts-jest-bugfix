import "jest";
import { TestScheduler } from "@kwonoj/rxjs-testscheduler-compat";
import { FooBar } from "../index";

describe("ts-jest being slow", () => {

  it("creates many Timeout errors", () => {
    let scheduler = new TestScheduler()
    let foobar = new FooBar(scheduler, 1000);
    let results = scheduler.startScheduler(() => foobar.obs, {
      created: 0,
      subscribed: 0,
      unsubscribed: 1000 * 60,
    });
    expect(results.messages).toHaveLength(60 - 2);
    // let sum = 0;
    // for (let i = 0; i < 1000 * 1000; i++) {
    //   sum += eval("1 + { field: 2 }.field");
    // }
  })

})

