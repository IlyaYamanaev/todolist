import AbstractComponent from "../framework/view/abstract-component.js"

function createTaskboardTemlate() {
   return (
      `<div class="task-board"></div>`
   );
}

export default class TaskboardComponent extends AbstractComponent {
   get template() {
      return createTaskboardTemlate();
   }
}