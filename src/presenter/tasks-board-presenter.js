import { TaskStatus, TaskStatusTitle } from '../const.js';
import TaskboardComponent from '../view/taskboard-component.js';
import TaskListComponent from '../view/task-list-component.js';
import ClearButtonComponent from '../view/clear-button-component.js';
import { render } from '../framework/render.js';

export default class TasksBoardPresenter {
   #boardContainer = null;
   #tasksModel = null;
   #taskboardComponent = new TaskboardComponent();

   constructor({ boardContainer, tasksModel }) {
      this.#boardContainer = boardContainer;
      this.#tasksModel = tasksModel;
   }

   init() { 
      render(this.#taskboardComponent, this.#boardContainer);

      Object.values(TaskStatus).forEach(status => {
         const tasks = this.#tasksModel.getTasksByStatus(status).filter(task => task.status === status);
         const taskListComponent = new TaskListComponent({
            title: TaskStatusTitle[status],
            className: status,
            tasks
         });

         render(taskListComponent, this.#taskboardComponent.element);

         if (status === TaskStatus.TRASH) {
            render(new ClearButtonComponent(), taskListComponent.element);
         }
      });
   }
}