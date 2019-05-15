'use strict';

import { Character } from './Character';
import { Game } from './Game';
import { Hero } from './Hero';
import { Skeleton } from './Skeleton';
import { Boss } from './Boss';

export class Action extends Game {
  constructor(mapSize: number){
    super(mapSize);
    super.newGame(mapSize);
  }
  
  private moveEnemy(character: Skeleton | Boss): void {
    let randomDirection: number = Math.floor(Math.random() * (4));

    // enemies does not leave the map && does not occupy the same position && can strike on the Hero
    if (randomDirection === 0 && (character.posI > 0 && (this.map[character.posI - 1][character.posJ] === 1 || this.map[character.posI - 1][character.posJ] === 10))) {
      this.enemyStep(character, randomDirection);
    } else if (randomDirection === 1 && (character.posI < 9 && (this.map[character.posI + 1][character.posJ] === 1 || this.map[character.posI + 1][character.posJ] === 10))) {
      this.enemyStep(character, randomDirection);
    } else if (randomDirection === 2 && (character.posJ > 0 && (this.map[character.posI][character.posJ - 1] === 1 || this.map[character.posI][character.posJ - 1] === 10))) {
      this.enemyStep(character, randomDirection);
    } else if (randomDirection === 3 && (character.posJ < 9 && (this.map[character.posI][character.posJ + 1] === 1 || this.map[character.posI][character.posJ + 1] === 10))) {
      this.enemyStep(character, randomDirection);
    }/* else {   error: maximum stack size 
      this.moveEnemy(character);
    } */
  }

  private enemyStep(character: Skeleton | Boss, randomDirection: number): void {  // this method is called in moveEnemy above
    this.map[character.posI][character.posJ] = 1;
    if (randomDirection === 0) {
      character.posI--;
    } else if (randomDirection === 1) {
      character.posI++;
    } else if (randomDirection === 2) {
      character.posJ--;
    } else if (randomDirection === 3) {
      character.posJ++;
    }
    /* if (this.map[character.posI][character.posJ] = 10) {
      this.battle(character, this.hero);
    } */
    this.map[character.posI][character.posJ] = character instanceof Skeleton ? 20 : 30;
  }

  moveAllEnemies(): void {
    this.skeletons.forEach((char: Skeleton) => this.moveEnemy(char));
    if (this.boss) { this.moveEnemy(this.boss); }
  }

  moveHero(direction: number): any {
    let posI = this.hero.posI;  // for better readability
    let posJ = this.hero.posJ;
    if (direction === 0 && posI - 1 >= 0 && this.map[posI - 1][posJ] !== 0) {
      this.heroStep(direction);
    } else if (direction === 1 && posI + 1 < 10&& this.map[posI + 1][posJ] !== 0) {
      this.heroStep(direction);
    } else if (direction === 2 && posJ - 1 >= 0 && this.map[posI][posJ - 1] !== 0) {
      this.heroStep(direction);
    } else if (direction === 3 && posJ + 1 < 10 && this.map[posI][posJ + 1] !== 0) {
      this.heroStep(direction);
    } else if (direction === 4) {    
      this.battle();
      
    }
  }
  // direction:  0 => up, 1 => down, 2 = left, 3 = right; 4 = strike?
  private heroStep(direction: number): void {
    this.map[this.hero.posI][this.hero.posJ] = 1;
    if (direction === 0) {
      this.hero.posI--;
    } else if (direction === 1) {
      this.hero.posI++;
    } else if (direction === 2) {
      this.hero.posJ--;
    } else if (direction === 3) {
      this.hero.posJ++;
    }
    this.map[this.hero.posI][this.hero.posJ] = 10;
  }

  battle(): void {
    let opponent: Skeleton | Boss = this.skeletons.filter((s: Skeleton) => s.posI === this.hero.posI && s.posJ === this.hero.posJ)[0]  || this.boss;
    let round: number = 1;
    let heroSV: number = this.hero.SP + this.d(6) * 2;
    let opponentSV: number = opponent.SP + this.d(6) * 2;
    while (this.hero.currentHP > 0 && opponent.currentHP > 0) {
      console.log(`Round${round}`);  // debug in case of eternal battle;
      if (heroSV > opponent.DP) {  
        opponent.currentHP -= (heroSV - opponent.DP);
      }
      if (opponent.currentHP <= 0) {  // removes the loser
        if (opponent.hasTheKey) { this.hero.hasTheKey = true }
        opponent instanceof Boss ? delete this.boss : this.skeletons.forEach((s: Skeleton) => s.currentHP <= 0 ? this.skeletons.splice(this.skeletons.indexOf(s), 1) : false);
      }
      if (opponentSV > this.hero.DP) {
        this.hero.currentHP -= (opponentSV - this.hero.DP);
      }
      if (this.hero.currentHP <= 0) {
        console.log(`Game Over!`);
      }
      round++;      
    }
  }
}

