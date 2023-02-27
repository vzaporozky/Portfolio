import MainPage from "../pages/MainPage";
import About from "../pages/About";
import Contacts from "../pages/Contacts";
import ColorGame from "../pages/apps/ColorGame/ColorGame";
import HangMan from "../pages/apps/HangMan/HangMan";
import TicTacToe from "../pages/apps/TicTacToe/TicTacToe";
import ToDoList from "../pages/apps/ToDoList/ToDoList";
import ChatGPT from "../pages/apps/ChatGPT/ChatGPT";

import Login from "../pages/Login/Login";

export const privetRouter = [
    {path:'/', component: MainPage, exact: true},
    {path:'/About', component: About, exact: true},
    {path:'/Contacts', component: Contacts, exact: true},
    {path:'/ColorGame', component: ColorGame, exact: true},
    {path:'/HangMan', component: HangMan, exact: true},
    {path:'/TicTacToe', component: TicTacToe, exact: true},
    {path:'/ToDoList', component: ToDoList, exact: true},
    {path:'/ChatGPT', component: ChatGPT, exact: true},
];
export const publicRouter = [
    {path: '/Login', component: Login, exact: true},
];