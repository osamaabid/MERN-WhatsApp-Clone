import User from "../models/User.js";

export const addUser = async (req, res) => {
  try {
    let exist = await User.findOne({ googleId: req.body.googleId });

    if (exist) {
      res.status(200).json("User Already Exists");
      return;
    }
    const newUser = new User(req.body);
    await newUser.save();
    res.status(200).json("User Saved Successfully");
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find({});

    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
};
