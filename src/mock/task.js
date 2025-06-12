import { Status } from "../const.js";

export const tasks = [
   {
      status: Status.BACKLOG,
      tasks: ["Сходить в магазин", "Пойти погулять", "Устроиться на работу"]
   },
   {
      status: Status.IN_PROGRESS,
      tasks: []
   },
   {
      status: Status.DONE,
      tasks: ["Выучить JS", "Выучить React"]
   },
   {
      status: Status.TRASH,
      tasks: ["Позвонить маме", "Погладить кота", "Прочитать Войну и Мир"]
   }
]