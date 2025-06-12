import TaskListComponent from '../view/task-list-component.js';
import TaskComponent from '../view/task-component.js';
import { render } from '../framework/render.js';
import TaskboardComponent from '../view/taskboard-component.js';
import ClearButtonComponent from '../view/clear-button-component.js';
import NoTaskComponent from '../view/no-task-component.js';

export default class TaskBoardPresenter {

   #taskboardComponent = new TaskboardComponent();
   #boardContainer = null;
   #boardtasks = [];
   #tasksModel = null;

   constructor({ boardContainer, tasksModel }) {
      this.#boardContainer = boardContainer;
      this.#tasksModel = tasksModel;
   }

   init() {
      this.#boardtasks = this.#tasksModel.tasks;

      render(this.#taskboardComponent, this.#boardContainer);

      this.#boardtasks.forEach((taskList) => {
         this.#renderTaskListComponent(taskList.status, taskList.tasks);
      });

      this.#renderClearButton();
   }

   #renderTask(task, container) {
      render(new TaskComponent(task), container.element.querySelector('.tasks-list'));
   }

   #renderTaskListComponent(status, tasks) {
      const list = new TaskListComponent(status);

      render(list, this.#taskboardComponent.element);

      tasks.length === 0 ? this.#renderNoTaskComponent(list) : tasks.forEach((task) => {
         this.#renderTask(task, list);
      });
   }

   #renderClearButton() {
      const trashContainer = document.querySelector('.trash');

      if (trashContainer) {
         render(new ClearButtonComponent(), trashContainer);
      }
   }

   #renderNoTaskComponent(container) {
      render(new NoTaskComponent(), container.element);
   }
}