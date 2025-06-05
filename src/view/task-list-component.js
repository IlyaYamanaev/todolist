import { createElement } from '../framework/render.js';
import { render } from '../framework/render.js';
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

         const tasksContainer = document.createElement('div');
         this.tasks.forEach(task => {
            render(new TaskComponent(task), tasksContainer);
         });
         this.element.appendChild(tasksContainer);

         if (this.className === 'trash') {
            const clearButton = document.createElement('button');
            clearButton.classList.add('clear-button');
            clearButton.textContent = 'Х Очистить';
            this.element.appendChild(clearButton);
         }
      }
      return this.element;
   }

   removeElement() {
      this.element = null;
   }
}