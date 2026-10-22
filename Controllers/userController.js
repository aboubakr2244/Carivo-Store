const userService = require("../Services/userService");

const profileUser = async (req, res) => {
  try {
    const user = await userService.profileUser(req.user._id);
    res.status(200).json({ message: "success", data: user });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const updateProfile = async (req, res) => {
  try {
    const user = await userService.updateUser(req.user._id, req.body);
    res.status(201).json({ message: "Data updated", data: user });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = { profileUser, updateProfile };
