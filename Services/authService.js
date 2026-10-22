const User = require("../Models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (userData) => {
  const { name, email, password } = userData;
  if (!name || !email || !password) {
    throw new Error("All fields are required");
  }
  const userExist = await User.findOne({ email });
  if (userExist) {
    throw new Error("Email already exist");
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  return {
    message: "Register Success",
    user,
  };
};

const login = async (userData) => {
  const { email, password } = userData;
  if (!email || !password) {
    throw new Error("All fields are rquired");
  }
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("Invalid Credentials");
  }
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error("Invalid password");
  }

  const token = jwt.sign(
    {
      id: user._id,
      role: user.role,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "4d",
    },
  );
  return {
    message: "Login sucess",
    token,
    user,
  };
};

module.exports = { register, login };
