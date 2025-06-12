import AbstractComponent from "../framework/view/abstract-component.js";

function createFormAddTaskComponentTemplate() {
   return `
   <section class="new-task-container">
      <h1 class="new-task-header">Новая задача</h1>
      <form class="add-task_form" aria-label="Форма добавления задачи">
         <div>
            <input class="task-input" type="text" placeholder="Название задачи..." required>
         </div>
        <button class="add-button" type="submit">+ Добавить</button>
      </form>
   </section> 
   `;
}

export default class FormAddTaskComponent extends AbstractComponent {
   get template() {
      return createFormAddTaskComponentTemplate();
   }
}
