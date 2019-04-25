//math.test.ts
import * as test from 'tape';

//const test = require('tape').test;
//import { Apple } from './apple'

test("Math test", (t: any) => {
    t.equal(4, 2 + 2);
    t.true(5 > 2 + 2);

    t.end();
});