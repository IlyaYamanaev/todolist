import HeaderComponent from './view/header-component.js';
import FormAddTaskComponent from './view/form-add-task-component.js';
import TaskboardComponent from './view/taskboard-component.js';
import TaskListComponent from './view/task-list-component.js';
import { render, RenderPosition } from './framework/render.js';

const listsData = [
   {
      title: 'Бэклог',
      className: 'backlog',
      tasks: ['Выучить JS', 'Выучить React', 'Сделать домашку']
   },
   {
      title: 'В процессе',
      className: 'in-progress',
      tasks: ['Выпить чаю', 'Попить воды']
   },
   {
      title: 'Готово',
      className: 'done',
      tasks: ['Позвонить маме', 'Погладить кота']
   },
   {
      title: 'Корзина',
      className: 'trash',
      tasks: ['Сходить погулять', 'Прочитать Войну и Мир']
   }
];

const bodyContainer = document.querySelector('.board-app');
const mainContainer = document.createElement('main');
mainContainer.classList.add('board-app__main');
bodyContainer.appendChild(mainContainer);

const innerContainer = document.createElement('div');
innerContainer.classList.add('board-app__inner');
mainContainer.appendChild(innerContainer);

const addTaskContainer = document.createElement('section');
addTaskContainer.classList.add('add-task');
innerContainer.appendChild(addTaskContainer);

const taskboardContainer = document.createElement('section');
taskboardContainer.classList.add('taskboard');
innerContainer.appendChild(taskboardContainer);

render(new HeaderComponent(), bodyContainer, RenderPosition.BEFOREBEGIN);
render(new FormAddTaskComponent(), addTaskContainer);

const taskboardComponent = new TaskboardComponent();
render(taskboardComponent, taskboardContainer);

const taskboardElement = taskboardComponent.getElement();
listsData.forEach(list => {
   render(new TaskListComponent(list), taskboardElement);
});