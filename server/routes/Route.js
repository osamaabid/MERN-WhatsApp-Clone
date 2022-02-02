import express from "express";
import {
  newConversation,
  getConversation,
} from "../contorller/conversationController.js";
import { newMessage, getMessages } from "../contorller/messageController.js";
import { addUser, getUsers } from "../contorller/userController.js";

const route = express.Router();

route.post("/add", addUser);
route.get("/users", getUsers);
route.post("/conversation/add", newConversation);
route.post("/conversation/get", getConversation);
route.post("/message/add", newMessage);
route.get("/message/get/:id", getMessages);

export default route;
