'use strict';
import {Tree} from './Tree';
import {Flower} from './Flower';

class Garden {
  trees: Tree[];
  flowers: Flower[];

  constructor(trees: Tree[] = [], flowers: Flower[] = []) {
    this.trees = trees;
    this.flowers = flowers;
  }

  watering(amountOfWater: number): void {
    
  }
}