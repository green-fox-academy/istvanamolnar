'use strict';

export class Apple {

  getApple(): string {
    return 'apple';
  }

  sum(arrayOfNumbers: number[]): number {
    return arrayOfNumbers.length ? arrayOfNumbers.reduce((a: number, b: number) => a + b) : 0;
  }

  anagrams(word1: string, word2: string): boolean {
    return word1.split('').sort().join('') === word2.split('').sort().join('');
  }

  countLetter(string: string) {
    let ObjectOfLetters: any = {};
    string.split('').forEach((x: string) => ObjectOfLetters.hasOwnProperty(x) ? ObjectOfLetters[x]++ : ObjectOfLetters[x] = 1);
    let SortedLetters: any = {};
    Object.keys(ObjectOfLetters).sort().forEach((x: string) => SortedLetters[x] = ObjectOfLetters[x]);
    //console.log(`${JSON.stringify(ObjectOfLetters)}\n${JSON.stringify(SortedLetters)}`);
    return SortedLetters;
  }
    
  findFibonacci(index: number): any {
    let list: number[] = [0, 1];
    for (let i: number = 1; i < index; i++) {
      list.push(list[i] + list[i - 1]);
    }
    return list[index];
  }
}
