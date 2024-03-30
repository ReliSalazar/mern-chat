import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../utils/generate-token.js";

export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Passwords do not match",
      });
    }

    const user = await User.findOne({ username });

    if (user) {
      return res.status(400).json({
        success: false,
        message: "Username already exists",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const profilePicture = `https://api.dicebear.com/8.x/adventurer/svg?seed=${username}`;

    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      profilePicture,
    });

    if (newUser) {
      generateTokenAndSetCookie(newUser._id, res);
      await newUser.save();
      res.status(201).json({
        success: true,
        message: "User created successfully",
        data: {
          _id: newUser._id,
          fullName: newUser.fullName,
          username: newUser.username,
          profilePicture: newUser.profilePicture,
        },
      });
    } else {
      res.status(400).json({
        success: false,
        message: "User not created",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    const passwordMatch = await bcrypt.compare(password, user?.password || "");

    if (!user || !passwordMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid username or password",
      });
    }

    generateTokenAndSetCookie(user._id, res);
    res.status(200).json({
      success: true,
      message: "User logged in successfully",
      data: {
        _id: user._id,
        fullName: user.fullName,
        username: user.username,
        profilePicture: user.profilePicture,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const logout = (req, res) => {
  try {
    res.clearCookie("jwt");
    res.status(200).json({
      success: true,
      message: "User logged out successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
