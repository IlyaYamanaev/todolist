import AbstractComponent from '../framework/view/abstract-component.js';

function createTaskboardComponentTemplate() {
   return(
   `<div class="task-board"></div>`
   );
}

export default class TaskboardComponent extends AbstractComponent {
   get template() {
      return createTaskboardComponentTemplate();
   }
}