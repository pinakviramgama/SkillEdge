import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const con = mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (err) {
    console.log(err.message);
  }
};

export default connectDB;
