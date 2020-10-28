import { User } from '../models/User';

export class UserForm {
  constructor(public parent: Element, public model: User) {
    this.bindModel();
  }

  template(): string {
    return `
    <div>
      <h1>UserForm</h1>
      <div>Name: ${this.model.get('name')}</div>
      <div>Age: ${this.model.get('age')}</div>
      <input />
      <button>Click me</button>
      <button class = "set-age">Set random age</button>
    </div>
    `;
  }

  bindModel (): void{
    this.model.on('change',()=> {
      this.render();
    });
  }

  eventsMap(): { [key: string]: () => void } {
    return {
      //Binding events through Class Name
      'click:.set-age': this.onSetAgeClick
    };
  }

  onSetAgeClick=(): void=>{
    this.model.setRandomAge();
    
  }  

  onButtonClick(): void {
    console.log('Hi there!');
  }

  onHover(): void {
    console.log('Hovered over h1');
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(':');
      fragment.querySelectorAll(selector).forEach((element) => {
        element.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
  }

  render(): void {
    this.parent.innerHTML ='';
    
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);

    this.parent.append(templateElement.content);
  }
}
