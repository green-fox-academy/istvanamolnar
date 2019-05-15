export interface IMap {
  mapSize: number;
  map: number[][];

  setMap(): void;
  setRandomMap(): number[][];
}