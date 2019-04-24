'use strict';

import { Aircraft } from './Aircraft';
import { Carrier } from './Carrier';

let Carrier1 = new Carrier(1000, 1000);
let Carrier2 = new Carrier(900, 900);

Carrier1.add(8, 30);
Carrier1.add(12, 20);
Carrier1.add(20, 10);
Carrier1.add(10, 25);

Carrier2.add(15, 20);
Carrier2.add(10, 40);
Carrier2.add(8, 50);

console.log(Carrier1, Carrier2);

Carrier1.fill(5);
Carrier2.fill(5);

Carrier1.getStatus();