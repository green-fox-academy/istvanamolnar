'use strict';

export function getIndex(array: string[], value: string): number[] {
    return array.filter((fruit: string) => fruit === value).length > 0 ? [array.indexOf(value)] : [-1];
};