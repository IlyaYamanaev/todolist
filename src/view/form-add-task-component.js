import { createElement } from '../framework/render.js';

function createFormAddTaskComponentTemplate() {
   return `
    <section class="new-task-container">
      <h2>Новая задача</h2>
      <form class="add-task__form" aria-label="Форма добавления задачи">
        <div class="add-task__input-wrapper">
          <input class="task-input" type="text" placeholder="Название задачи..." required>
        </div>
        <button class="add-button" type="submit">+ Добавить</button>
      </form>
    </section>
  `;
}

export default class FormAddTaskComponent {
   getTemplate() {
      return createFormAddTaskComponentTemplate();
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