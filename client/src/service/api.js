import axios from "axios";

const url = "http://localhost:8000/api";

export const addUser = async (data) => {
  try {
    console.log("in addUser try");
    let res = await axios.post(`${url}/add`, data);
    console.log(res.data);
    return res;
  } catch (err) {
    console.log("Add User Api Error: ", err);
  }
};

export const getUsers = async () => {
  try {
    console.log("in getUsers try");
    let res = await axios.get(`${url}/users`);
    console.log(res.data);
    return res.data;
  } catch (err) {
    console.log("Get User Api Error: ", err);
  }
};

export const setConversation = async (userObj) => {
  try {
    await axios.post(`${url}/conversation/add`, userObj);
  } catch (err) {
    console.log("Set Conversation Error:", err);
  }
};

export const getConversation = async (userObj) => {
  try {
    let res = await axios.post(`${url}/conversation/get`, userObj);
    return res.data;
  } catch (err) {
    console.log("Get Conversation Error:", err);
  }
};

export const newMessage = async (data) => {
  try {
    let res = await axios.post(`${url}/message/add`, data);
  } catch (err) {
    console.log("New MEssage Api Error: ", err);
  }
};

export const getMessages = async (id) => {
  try {
    let res = await axios.get(`${url}/message/get/${id}`);
    return res.data;
  } catch (err) {
    console.log("Get MEssage Api Error: ", err);
  }
};
