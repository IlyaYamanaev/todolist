import { createElement } from '../framework/render.js';
import TaskComponent from './task-component.js';

function createTaskListComponentTemplate(title, className, tasks) {
   return `
    <div class="task-column ${className}">
      <span class="title">${title}</span>
      ${tasks.map(task => `<div class="task" data-task-id="${task.id}">${task.title}</div>`).join('')}
    </div>
  `;
}

export default class TaskListComponent {
   constructor({ title, className, tasks }) {
      this.title = title;
      this.className = className;
      this.tasks = tasks;
   }

   getTemplate() {
      return createTaskListComponentTemplate(
         this.title,
         this.className,
         this.tasks
      );
   }

   getElement() {
      if (!this.element) {
         this.element = createElement(this.getTemplate());
      }
      return this.element;
   }

   removeElement() {
      this.element = null;
   }
}
