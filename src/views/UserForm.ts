import { User, UserProps } from '../models/User';
import { Views } from './Views';

export class UserForm extends Views<User,UserProps>{
  

  template(): string {
    return `
    <div>

      <input placeholder="${ this.model.get('name')}"/>
      <button class = 'set-name'>Update</button>
      <button class = "set-age">Set random age</button>
      <button class = "save-model">Save user</button>
    </div>
    `;
  }

  

  eventsMap(): { [key: string]: () => void } {
    return {
      //Binding events through Class Name
      'click:.set-age': this.onSetAgeClick,
      'click:.set-name': this.onSetNameClick,
      'click:.save-model': this.onSaveButtonClick
    };
  }

  onSetNameClick = (): void => {
    const input = this.parent.querySelector('input');

    if (input) {
      const name = input.value;

      this.model.set({ name });
    }
  };

  onSaveButtonClick = ():void =>{
    this.model.save();
  }

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
