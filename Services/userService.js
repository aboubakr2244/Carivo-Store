const User = require("../Models/userModel");

const profileUser = async (id) => {
  const user = await User.findById(id).select("-password");
  if (!user) {
    throw new Error("User not found");
  }
  return user;
};

const updateUser = async (id, data) => {
  const user = await User.findByIdAndUpdate(id, data, {
    new: true,
  }).select("-password");
  if (!user) {
    throw new Error("User not found");
  }
  return user;
};
module.exports = { profileUser, updateUser };
