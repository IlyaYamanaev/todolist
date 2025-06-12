import AbstractComponent from '../framework/view/abstract-component.js';

function createAddNewTaskTemplate() {
   return `
   <section class="new-task-container">
      <h1 class="new-task-header">Новая задача</h1>
      <form class="add-task_form" aria-label="Форма добавления задачи">
         <div>
            <input class="task-input" type="text" placeholder="Название задачи..." required>
         </div>
        <button class="add-button" type='submit'>+ Добавить</button>
      </form>
   </section> 
   `;
}


export default class FormAddTaskComponent extends AbstractComponent {
   #handleClick = null;

   constructor({ onClick }) {
      super();
      this.#handleClick = onClick;
      this.element.addEventListener('submit', this.#clickHandler);
   }

   get template() {
      return createAddNewTaskTemplate();
   }

   #clickHandler = (evt) => {
      evt.preventDefault();
      this.#handleClick();
   };
}