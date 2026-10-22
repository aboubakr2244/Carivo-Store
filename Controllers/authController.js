const authService = require("../Services/authService");

const register = async (req, res) => {
  try {
    const result = await authService.register(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const result = await authService.login(req.body);
    res.status(200).json(result).select("-password");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { register, login };
