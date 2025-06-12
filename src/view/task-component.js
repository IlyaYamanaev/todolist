import AbstractComponent from '../framework/view/abstract-component.js';

function createTaskComponentTemplate(task) {
   return (`
    <div class="task">${task}</div>
  `);
}

export default class TaskComponent extends AbstractComponent {
   constructor(tasks) {
      super();
      this.tasks = tasks;
   }


   get template() {
      return createTaskComponentTemplate(this.tasks);
   }
}

