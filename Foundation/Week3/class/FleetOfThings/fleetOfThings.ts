'use strict';
import { Thing } from './thing';
import { Fleet } from './fleet';

let fleet: Fleet = new Fleet();

/* Crete a fleet of things to have this output:
1. [ ] Get milk
2. [ ] Remove the obstacles
3. [x] Stand up
4. [x] Eat lunch
// Hint: You have to create a `print()` method as well */

fleet.add(new Thing('Get milk'));
fleet.add(new Thing('Remove the obstacles'));
fleet.add(new Thing('Stand up'));
fleet.add(new Thing('Eat lunch'));

//console.log(fleet);
fleet.getThings().forEach(x => x.getName() === 'Stand up' || x.getName() === 'Eat lunch' ? x.complete() : false);
//console.log(fleet);

fleet.print();