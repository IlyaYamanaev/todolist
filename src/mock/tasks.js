import { generateID } from "../utils.js";
import { Status } from "../const.js";

export const tasks = [
   {
      status: Status.BACKLOG,
      tasks: [
         {
            id: generateID(),
            name: "Сходить в магазин"
         },
         {
            id: generateID(),
            name: "Пойти погулять"
         },
         {
            id: generateID(),
            name: "Устроиться на работу"
         }
      ]

   },
   {
      status: Status.IN_PROGRESS,
      tasks: []

   },
   {
      status: Status.DONE,
      tasks: [
         {
            id: generateID(),
            name: "Выучить JS"
         },
         {
            id: generateID(),
            name: "Выучить React"
         }
      ]

   },
   {
      status: Status.BASKET,
      tasks: [
         {
            id: generateID(),
            name: "Позвонить маме"
         },
         {
            id: generateID(),
            name: "Погладить кота"
         },
         {
            id: generateID(),
            name: "Прочитать Войну и Мир"
         }
      ]
   }
]