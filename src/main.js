import HeaderComponent from './view/header-component.js';
import FormAddTaskComponent from './view/form-add-task-component.js';
import TaskBoadPresenter from './presenter/task-board-presenter.js';
import TasksModel from './model/task-model.js';
import { render, RenderPosition } from './framework/render.js';
import ClearButtonComponent from './view/clear-button-component.js';

const bodyContainer = document.querySelector('.board-app');


const tasksModel = new TasksModel();

const clearButtonComponent = new ClearButtonComponent({
   onClick: handleClearBasketButtonClick
});

const taskBoardPresenter = new TaskBoadPresenter({
   boardContainer: bodyContainer,
   tasksModel: tasksModel,
   clearButtonComponent: clearButtonComponent
});

const formAddTaskComponent = new FormAddTaskComponent({
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

