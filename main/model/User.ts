import mongoose, { Schema } from "mongoose";

const mongoUrl = process.env.MONGO_URL || "mongodb://userdb:27017/demo";
mongoose.connect(mongoUrl, {
  serverSelectionTimeoutMS: 30000,
});

const userSchema = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
  profile_picture: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

export default User;
