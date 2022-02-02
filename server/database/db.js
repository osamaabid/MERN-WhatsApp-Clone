import mongoose from "mongoose";

const Connection = async (url) => {
  const URL = url;

  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log("Database Connected Successfully");
  } catch (err) {
    console.log(err);
  }
};

export default Connection;
