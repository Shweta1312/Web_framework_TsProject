export class UserForm {
  constructor(public parent: Element) {}

  template(): string {
    return `
    <div>
      <h1>UserForm</h1>
      <input />
      <button>Click me</button>
    </div>
    `;
  }

  eventsMap(): { [key: string]: () => void } {
    return {
      'click:button': this.onButtonClick,
      'mouseenter:h1': this.onHover,
    };
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
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);

    this.parent.append(templateElement.content);
  }
}
