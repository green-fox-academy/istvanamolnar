'use strict';

/* export function getIndex(array: string[], value: string): number[] {
    return array.filter((fruit: string) => fruit === value).length > 0 ? [array.indexOf(value)] : [-1];
};
 */

export let getIndex = function (array: string[], value: string): number[] {
  let multipleIndexArray: number[] = [];
  array.forEach((fruit: string) => fruit === value ? multipleIndexArray.push(array.indexOf(fruit)) : false);
  return multipleIndexArray.length ? multipleIndexArray : [-1];
};