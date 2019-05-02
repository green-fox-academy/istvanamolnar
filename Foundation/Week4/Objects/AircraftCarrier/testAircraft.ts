'use strict';

import { Carrier } from './Carrier';

let first = new Carrier(100, 2500);
let second = new Carrier(50, 2500);

first.add('F16');
first.add('F16');
first.add('F16');
first.add('F35');
first.add('F35');

second.add('F16');
second.add('F16');
second.add('F35');
second.add('F35');
second.add('F35');

first.fill();
second.fill();

first.fight(second);
first.fill();
console.log(first, second);

console.log(first.getStatus());