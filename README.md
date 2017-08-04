# Demo ts-lint recompiling TypeScript

````bash
node --inspect --debug-brk node_modules/.bin/jest --verbose --runInBand
````

Sample test output:

````
-> % node node_modules/.bin/jest --verbose --runInBand
 PASS  src/__tests__/simple-error.ts (5.977s)
  ts-jest being slow
    ✓ throwing 1000 Errors (4693ms)
    ✓ throwing 1000 Errors, not touching Error.stack (4ms)

 PASS  src/__tests__/slow.ts
  ts-jest being slow
    ✓ creates many Timeout errors (2227ms)

Test Suites: 2 passed, 2 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        9.163s
Ran all test suites.
````