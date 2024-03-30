import User from "../models/user.model.js";

export const signupUser = async (req, res) => {
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

    const profilePicture = `https://api.dicebear.com/8.x/adventurer/svg?seed=${username}`;

    const newUser = new User({
      fullName,
      username,
      password,
      profilePicture,
    });

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
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const loginUser = async (req, res) => {
  console.log(req.body);
};

export const logoutUser = async (req, res) => {
  console.log(req.body);
};
