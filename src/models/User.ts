import axios, { AxiosResponse } from "axios";

interface UserProps {
  // ? -->Optional
  id?: number;
  name?: string;
  age?: number;
}

type Callback = () => void;

export class User {
  event: { [key: string]: Callback[] } = {};

  constructor(private data: UserProps) {}

  get(propName: string): string | number {
    return this.data[propName];
  }

  set(propName: UserProps): void {
    //Assigs value from one object to another...in this case from propName to data
    Object.assign(this.data, propName);
  }

  on(eventName: string, callBack: Callback): void {
    const handlers = this.event[eventName] || [];
    handlers.push(callBack);
    this.event[eventName] = handlers;
  }

  trigger(eventName: string): void {
    const handlers = this.event[eventName];

    if (!handlers || handlers.length === 0) {
      return;
    }

    handlers.forEach((callback) => {
      callback();
    });
  }

  fetch(): void{
    axios.get(`http://localhost:3000/users/${this.get('id')}`)
    .then((response: AxiosResponse): void =>{
      this.set(response.data);
    })
  }

  save(): void{
    const id = this.get('id');
    if(id){
      //Update user
      axios.put(`http://localhost:3000/users/${id}`,this.data);
    }else{
      //Create new user
      axios.post(`http//localhost:3000/users`,this.data);
    }
  }
}
