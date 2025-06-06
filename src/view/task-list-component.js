
import { createElement } from '../framework/render.js';
import TaskComponent from './task-component.js';

function createTaskListComponentTemplate() {
   return `<div class="task-column"></div>`;
}

export default class TaskListComponent {
   constructor({ title, className, tasks }) {
      this.title = title;
      this.className = className;
      this.tasks = tasks;
   }

   getTemplate() {
      return createTaskListComponentTemplate();
   }

   getElement() {
      if (!this.element) {
         this.element = createElement(this.getTemplate());
         this.element.classList.add(this.className);

         const titleElement = document.createElement('span');
         titleElement.classList.add('title');
         titleElement.textContent = this.title;
         this.element.appendChild(titleElement);

         this.tasks.forEach(task => {
            const taskComponent = new TaskComponent(task);
            this.element.appendChild(taskComponent.getElement());
         });
      }
      return this.element;
   }

   removeElement() {
      this.element = null;
   }
}