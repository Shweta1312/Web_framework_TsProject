import { Sync } from '../Sync';
import { Eventing } from '../Eventing';
import { Attributes } from '../Attributes';

export interface UserProps {
  // ? -->Optional
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl = 'https://localhost:300/users';

export class User {
  public events: Eventing = new Eventing();
  public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
  public attributes: Attributes<UserProps>;

  constructor(attr: UserProps){
    this.attributes = new Attributes(attr);
  }
  
}
