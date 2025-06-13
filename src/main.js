import { render, RenderPosition } from './framework/render.js';
import HeaderComponent from './view/header-component.js';
import AddNewTaskComponent from './view/form-add-task-component.js';
import TaskBoadPresenter from './presenter/task-board-presenter.js';
import TasksModel from './model/task-model.js';
import ClearButtonComponent from './view/clear-button-component.js'
import TaskApiServices from './task-apiservices.js'

const END_POINT = 'https://684b4790165d05c5d35c097e.mockapi.io/';
const bodyContainer = document.querySelector('.board-app');

const tasks = new TasksModel({
   tasksApiServices: new TaskApiServices(END_POINT)
});

const clearButtonComponent = new ClearButtonComponent({
   onClick: handleClearBasketButtonClick
});

const taskBoardPresenter = new TaskBoadPresenter({
   boardContainer: bodyContainer,
   tasksModel: tasks,
   clearButtonComponent: clearButtonComponent
});

const formAddTaskComponent = new AddNewTaskComponent({
   onClick: handleAddNewTaskButtonClick
});

render(new HeaderComponent(), bodyContainer, RenderPosition.BEFOREBEGIN);

render(formAddTaskComponent, bodyContainer);

taskBoardPresenter.init();

function handleAddNewTaskButtonClick() {
   taskBoardPresenter.createTask();
}

function handleClearBasketButtonClick() {
   taskBoardPresenter.clearBasket();
}

