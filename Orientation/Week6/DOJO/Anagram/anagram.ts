'use strict';

export function anagram(str1: string, str2: string): boolean {
  str1 = str1.toLowerCase().split('').sort().join('');
  str2 = str2.toLowerCase().split('').sort().join('');
  return str1 === str2;
}