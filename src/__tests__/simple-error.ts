import "jest";
import "../index";

describe("ts-jest being slow", () => {

	let times = 1000;

  it(`throwing ${times} Errors`, () => {
		const errors: Error[] = [];
		for (let i = 0; i < times; i++) {
			try {
				throw new Error("Doesn't matter");
			} catch (e) {
				e.stack += "dummy";
				// do nothing
				errors.push(e);
			}
    }
  })

  it(`throwing ${times} Errors, not touching Error.stack`, () => {
		const errors: Error[] = [];
		for (let i = 0; i < times; i++) {
			try {
				throw new Error("Doesn't matter");
			} catch (e) {
				// do nothing
				errors.push(e);
			}
    }
  })

})
