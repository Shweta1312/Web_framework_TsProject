import { User, UserProps } from '../models/User';
import { Views } from './Views';

export class UserForm extends Views<User,UserProps>{
  

  template(): string {
    return `
    <div>
      <h1>UserForm</h1>
      <div>Name: ${this.model.get('name')}</div>
      <div>Age: ${this.model.get('age')}</div>
      <input />
      <button class = 'set-name'>Update</button>
      <button class = "set-age">Set random age</button>
    </div>
    `;
  }

  

  eventsMap(): { [key: string]: () => void } {
    return {
      //Binding events through Class Name
      'click:.set-age': this.onSetAgeClick,
      'click:.set-name': this.onSetNameClick,
    };
  }

  onSetNameClick = (): void => {
    const input = this.parent.querySelector('input');

    if (input) {
      const name = input.value;

      this.model.set({ name });
    }
  };
  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  };

  onButtonClick(): void {
    console.log('Hi there!');
  }

  onHover(): void {
    console.log('Hovered over h1');
  }

  
}
