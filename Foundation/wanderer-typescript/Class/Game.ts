'use strict';

import { IGame } from './Interface/IGame';
import { Hero } from './Hero';
import { Skeleton } from './Skeleton';
import { Boss } from './Boss';
import { Map } from './Map';

export class Game /* implements IGame */ {
  level: number;
  hero: Hero;
  boss: Boss;
  skeletons: Skeleton[];
  map: number[][];
  mapSize: number;
  
  constructor(mapSize: number, level: number = 1, hero?: Hero, boss?: Boss, skeletons: Skeleton[] = [], map?: number[][]) {
    this.level = level;
    this.hero = hero;
    this.boss = boss;
    this.skeletons = skeletons;
    this.map = map;
    this.mapSize = mapSize;
  }

  private getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  d(num: number): number {
    return Math.floor(Math.random() * (num)) + 1;
  }

  private addMap(): any {
    const table: Map = new Map(this.mapSize);
    this.map = table.map;
  }

  private addHero(): void {
    this.hero = new Hero();
  }

  private addBoss(): void {
    let i: number = Math.floor(Math.random() * (this.mapSize)); 
    let j: number = Math.floor(Math.random() * (this.mapSize));
    if (this.map[i][j] === 1) {
      this.map[i][j] = 30;
      this.boss = new Boss(this.level, i, j);
    } else {
      this.addBoss();
    }
  }

  private placeSkeletons(numOfSkeleton: number): string {
    if (numOfSkeleton === 0) { return `Ready, GO!`;}  // base case, does nothing!?
    
    let i = Math.floor(Math.random() * (this.mapSize));
    let j = Math.floor(Math.random() * (this.mapSize));
    
    if (this.map[i][j] === 1) {
      this.map[i][j] = 20;
      numOfSkeleton--;
    }
    this.placeSkeletons(numOfSkeleton);
  }

  private addSkeletons(num: number): void {
    this.placeSkeletons(num);
    for (let i: number = 0; i < this.mapSize; i++) {
      for (let j: number = 0; j < this.mapSize; j++) {
        if (this.map[i][j] === 20) {
          this.skeletons.push(new Skeleton(this.level, i, j));
        }
      }
    }
    this.skeletons[Math.floor(Math.random() * Math.floor(this.skeletons.length))].hasTheKey = true;   // gives the key to a random skeleton
  }

  private addEnemies(): void {
    this.addBoss();
    this.addSkeletons(this.getRandomInt(3, 6));
  }
  
  newGame(num: number): void {
    this.mapSize = num;
    this.addMap();
    this.addHero();
    this.addEnemies();
  }

  newLevel(num: number): void {
    this.mapSize = num;
    this.level++;
    this.hero.levelUp(); // defined in Hero.ts
    this.hero.posI = 0;
    this.hero.posJ = 0
    this.addMap(); // need random map;
    this.skeletons = [];  // could increase difficulty by keeping the unbeated monsters (maybe lvlup for them)
    this.addSkeletons(this.getRandomInt(3, 6));
    this.addBoss();
  }
}