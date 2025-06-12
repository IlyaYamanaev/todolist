import AbstractComponent from "../framework/view/abstract-component.js";

function createNoTaskComponent() {
   return `
   <div class="no-task-component">
     Перетащите катрочку
   </div>
 `;
}

export default class NoTaskComponent extends AbstractComponent {
   get template() {
      return createNoTaskComponent();
   }
}