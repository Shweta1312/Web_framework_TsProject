interface UserProps{
  // ? -->Optional 
  name?: string;
  age?: number
}

export class User{
  constructor(private data:UserProps){}

  get(propName: string): string|number{
    return this.data[propName];
  }

  set(propName: UserProps): void{
    //Assigs value from one object to another...in this case from propName to data
    Object.assign(this.data, propName);
  }
}