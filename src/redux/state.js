// Description: State of the application

import { renderEntireTree } from "../render";
let state = {
  profilePage: {
    postsData: [
      { id: 1, message: "Hi, my name is Igor, How are you?)" },
      {
        id: 2,
        message:
          "Today i was in Moscow, very comfortable city, but i dnt like many people!",
      },
      { id: 3, message: "I like to play football, and you?" },
    ],
  },
  dialogsPage: {
    dialogsData: [
      { id: 1, name: "Igor" },
      { id: 2, name: "Radmil" },
      { id: 3, name: "Egor" },
    ],
    messagesData: [
      { id: 1, message: "Hi dude!" },
      { id: 2, message: "How are You?)" },
      { id: 3, message: "I'm fine thnks" },
      { id: 4, message: "It's good, will be able to meet tommorow?" },
    ],
  },
};


export const addPost = (postMessage) => {
    let newPost = {
        id: 4,
        message: postMessage,
    };
    state.profilePage.postsData.push(newPost);
    renderEntireTree(state);
}

export const addMessage = (message) => {
    let newMessage = {
        id: 5,
        message: message,
    };
    state.dialogsPage.messagesData.push(newMessage);
    renderEntireTree(state);
}
export default state;