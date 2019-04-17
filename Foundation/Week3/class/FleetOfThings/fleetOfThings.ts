'use strict';
import { Thing } from './thing';
import { Fleet } from './fleet';

let fleet = new Fleet();

/* Crete a fleet of things to have this output:
1. [ ] Get milk
2. [ ] Remove the obstacles
3. [x] Stand up
4. [x] Eat lunch
// Hint: You have to create a `print()` method as well */

// const GetMilk: Thing = new Thing('Get milk');
// const RemoveObstacles: Thing = new Thing('Remove the obstacles');
// const StandUp: Thing = new Thing('Stand up');
// const EatLunch: Thing = new Thing('Eat Lunch');

fleet.add(new Thing('Get milk'));
fleet.add(new Thing('Remove the obstacles'));
fleet.add(new Thing('Stand up'));
fleet.add(new Thing('Eat Lunch'));
console.log(fleet.getThings());
console.log(fleet);