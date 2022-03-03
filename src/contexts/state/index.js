import { v4 as uuidv4 } from "uuid";

export const initialState = {
  tasks: [
    {
      id: uuidv4(),
      title: "Task 1",
      description: "Description 1",
      done: false,
    },
    {
      id: uuidv4(),
      title: "Task 2",
      description: "Description 2",
      done: true,
    },
  ],
  users: [
    {
      id: uuidv4(),
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
    },
    {
      id: uuidv4(),
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
    },
    {
      id: uuidv4(),
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",
    },
  ],
};
