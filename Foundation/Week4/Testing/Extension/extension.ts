'use strict';

export function add(a: number, b: number): number {
  return a + b;
}

export function maxOfThree(a: number, b: number, c: number): number {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
};

export function median(pool: number[]): number {
  pool = pool.sort((a: number, b:number) => a - b);
  return pool.length % 2 ? pool[Math.floor((pool.length) / 2)] : pool[Math.floor((pool.length) / 2) - 1], pool[Math.floor((pool.length) / 2)];
}

export function isVowel(character: string): boolean {
  return ['a', 'e', 'i', 'o', 'u'].indexOf(character.toLowerCase()) != -1 ? true : false;
}

export function translate(hungarian: string): string {
  let teve = hungarian;
  let length = teve.length;

  for (let i = 0; i < length; i++) {
    let c = teve[i];
    if (isVowel(c)) {
      teve = teve.split(c).join(`${c}v${c}`);
      i += 2;
      length += 2;
    }
  }
  return teve;
}

//console.log(isVowel('I'));