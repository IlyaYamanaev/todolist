import AbstractComponent from "../framework/view/abstract-component.js";

function createClearButtonTemplate() {
   return `
    <button class="clear-button" type="button">
      Х Очистить
    </button>
  `;
}

export default class ClearButtonComponent extends AbstractComponent {
   get template() {
      return createClearButtonTemplate();
   }
}