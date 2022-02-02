import Conversation from "../models/Conversation.js";
import Message from "../models/Message.js";

export const newMessage = async (req, res) => {
  const newMessage = new Message(req.body);
  try {
    await newMessage.save();
    await Conversation.findByIdAndUpdate(req.body.conversationId, {
      message: req.body.text,
    });
    res.status(200).json("Message Saved Successfully");
  } catch (err) {
    console.log(err);
  }
};

export const getMessages = async (req, res) => {
  try {
    const messages = await Message.find({ conversationId: req.params.id });
    res.status(200).json(messages);
  } catch (err) {
    console.log(err);
  }
};
