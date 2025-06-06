
import HeaderComponent from './view/header-component.js';
import FormAddTaskComponent from './view/form-add-task-component.js';
import TasksBoardPresenter from './presenter/tasks-board-presenter.js';
import TaskModel from './model/task-model.js';
import { render, RenderPosition } from './framework/render.js';

const bodyContainer = document.querySelector('.board-app');

const addTaskContainer = bodyContainer;
const taskboardContainer = bodyContainer;

const tasksModel = new TaskModel();
const tasksBoardPresenter = new TasksBoardPresenter({
   boardContainer: taskboardContainer,
   tasksModel
});

render(new HeaderComponent(), bodyContainer, RenderPosition.BEFOREBEGIN);

render(new FormAddTaskComponent(), addTaskContainer);

tasksBoardPresenter.init();

