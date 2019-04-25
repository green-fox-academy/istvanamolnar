'use strict';

const test = require('tape').test;
import {Apple} from './Apple';

const apple: Apple = new Apple()

test('string.test', (t: any) => {
  t.equal(apple.getApple(), 'apple');
  t.end();
}),

test('sum.test', (t: any) => {
  let arrayOfNumbers: number[] = [1, 2, 3, 4, 5];
  let actual: number = apple.sum(arrayOfNumbers);
  let expected: number = 15; 
  t.equal(actual, expected);
  
  arrayOfNumbers = [];
  t.equal(arrayOfNumbers.length, 0, 'The array should be empty');
  
  arrayOfNumbers = [15];
  t.equal(arrayOfNumbers.length, 1, 'The array should have exactly one item');
  
  t.end();
}),

test('anagram.test', (t: any) => {
  t.equal(apple.anagrams('alma', 'lama'), true, 'Should be true');
  t.notEqual(apple.anagrams('alma', 'llama'), true, 'Should be false');
  t.end();
}),

test('countletter.test', (t: any) => {
  t.deepEqual(apple.countLetter('almaalmaalmaalma'), apple.countLetter('lamalamalamalama'), 'Should be equal');
  t.notDeepEqual(apple.countLetter('almaalmaalma'), apple.countLetter('lllaaaaaammmX'), 'Should not be equal');
  t.notEqual(apple.countLetter('alma'), undefined, 'Should not be undefined');
  t.end();
}),

test('fibonacci.test', (t: any) => {
  t.equal(apple.findFibonacci(0), 0, 'Should be zero');
  t.equal(apple.findFibonacci(1000), 4.346655768693743e+208, 'Should be equal');
  t.notEqual(apple.findFibonacci(12)) // do I have to test if the argument is number?
  t.end();
})
