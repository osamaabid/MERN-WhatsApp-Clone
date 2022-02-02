import Conversation from "../models/Conversation.js";

export const newConversation = async (req, res) => {
  let senderId = req.body.senderId;
  let receiverId = req.body.receiverId;
  try {
    let existingConversation = await Conversation.findOne({
      members: {
        $all: [senderId, receiverId],
      },
    });

    if (existingConversation) {
      res.status(200).json("Conversation already exists");
      return;
    }

    const newConversation = new Conversation({
      members: [senderId, receiverId],
    });

    await newConversation.save();
    res.status(200).json("new conversation added successfully");
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getConversation = async (req, res) => {
  let senderId = req.body.senderId;
  let receiverId = req.body.receiverId;
  try {
    let existingConversation = await Conversation.findOne({
      members: {
        $all: [senderId, receiverId],
      },
    });
    res.status(200).json(existingConversation);
  } catch (err) {
    res.status(500).json(err);
  }
};
