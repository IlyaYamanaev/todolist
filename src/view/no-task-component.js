import AbstractComponent from '../framework/view/abstract-component.js';

function createNoTaskTemplate() {
   return `
    <div class="no-task-component">
      Перетащите катрочку
    </div>
  `;
}

export default class NoTaskComponent extends AbstractComponent {
   get template() {
      return createNoTaskTemplate();
   }
}

