'use strict';
import { Thing } from './thing';

class Fleet {
  private things: Thing[];

  constructor() {
    this.things = [];
  }

  add(thing: Thing): void {
    this.things.push(thing);
  }

  getThings(): Thing[] {
    return this.things;
  }

  print(): any {
    this.getThings().forEach(x => console.log(`[${x.getCompleted() ? 'X' : ' '}] ${x.getName()}`));
  }
}

export { Fleet };