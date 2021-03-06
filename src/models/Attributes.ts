import { UserProps } from './User';

export class Attributes<T> {
  constructor(private data: T) {}

  //bound function/ arrow function for getters
  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  };

  set(update: T): void {
    //Assigs value from one object to another...in this case from propName to data
    Object.assign(this.data, update);
  }

  getAll(): T {
    return this.data;
  }
}
