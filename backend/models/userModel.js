import mongoose from "mongoose";
import moment from "moment";

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
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

    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },

    createdAt: {
      type: String,
      default: () => moment().format('MMMM Do YYYY, h:mm:ss a'), // e.g., August 5th 2024, 2:22:12 pm
    },

    updatedAt: {
      type: String,
      default: () => moment().format('MMMM Do YYYY, h:mm:ss a'),
    },
  },
  { 
    timestamps: true 
  }
);

userSchema.pre('save', function (next) {
  this.updatedAt = moment().format('MMMM Do YYYY, h:mm:ss a');
  next();
});

const User = mongoose.model("User", userSchema);

export default User;
