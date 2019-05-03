'use strict';

import { Waiter } from './Waiter';
import { Chef } from './Chef';
import { Restaurant } from './Restaurant';
import { Manager } from './Manager';
import { Employee } from './Employee'

let first: Waiter = new Waiter('Jozsi');
first.work()
//console.log(first);


let second: Chef = new Chef('Petike');
second.cook('makoskolbasz');
second.cook('mezeskaposzta');
second.work();

let rt: Restaurant = new Restaurant('johely', 2019);

rt.hire(new Chef('Zoli'));
rt.hire(new Chef('Laci'));
rt.hire(new Waiter('Pali'));
rt.hire(new Waiter('Rozi'));
rt.hire(new Waiter('Saci'));
rt.hire(new Waiter('Tomi'));
rt.hire(new Manager('Teri'));
rt.hire(new Manager('Jani'));

rt.guestsArrived();

rt.listOfEmployees.forEach((x:Employee) => x instanceof Chef ? x.cook('makoslofasz'): false);
rt.listOfEmployees.forEach((x:Employee) => x instanceof Chef ? console.log(x): false);


