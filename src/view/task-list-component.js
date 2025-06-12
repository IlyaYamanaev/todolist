import { StatusLabel } from "../const.js";
import AbstractComponent from "../framework/view/abstract-component.js";

function createTasksListTemplate(label, status) {
   return `
   <div class="task-column ${status}">
      <h3 class="title">${label}</h3>
      <div class="tasks-list"></div>
   </div>
  `;
}

export default class TasksListComponent extends AbstractComponent {
   constructor(status) {
      super();
      this.status = status;
   }

   get template() {
      const label = StatusLabel[this.status];
      return createTasksListTemplate(label, this.status);
   }
}
