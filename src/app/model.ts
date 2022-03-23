import { TodoItem } from "./todoItem";

export class Model {
  name: string;
  items: TodoItem[];

  constructor() {
    this.name = "ToDo";
    this.items = [
      { description: "Breakfast", action: true},
      { description: "Spor", action: true},
      { description: "Shopping", action: false}
    ];
  }
}
