'use strict';

import { Hero } from '../Hero';
import { Skeleton } from '../Skeleton';
import { Boss } from '../Boss';

export interface IGame {
  level: number;
  hero: Hero;
  boss: Boss;
  skeletons: Skeleton[];
  map: number[][];
  mapSize: number;

  d(num: number): number;
  newGame(num: number): void;
  newLevel(num: number): void;
}