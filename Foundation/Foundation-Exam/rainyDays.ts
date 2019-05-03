'use strict';

const fs: any = require('fs');

function getMostRainyCity(filename: string): string {
  const fileContent: string[] = fs.readFileSync(filename, 'UTF-8').split('\n').filter((daylyLog: string) => daylyLog.includes('RAINY'));
  const filteredLog: string[][] = fileContent.map((data: string) => data.split(',')).map((dailyLog: string[]) => dailyLog.slice(1)); // removes date, which is not neccesary;

  let RainyCities: Object = {}
  filteredLog.forEach((city: string[]) => RainyCities.hasOwnProperty(city[0]) ? RainyCities[city[0]]++ : RainyCities[city[0]] = 1);
  const mostRainyCity: string = Object.keys(RainyCities).reduce((cityOne: string, cityTwo: string) => RainyCities[cityOne] > RainyCities[cityTwo] ? cityOne : cityTwo);
  return mostRainyCity;
}
//console.log(getMostRainyCity('cities.csv'));
