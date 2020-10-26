interface UserProps {
  // ? -->Optional
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
}
