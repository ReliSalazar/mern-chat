import User from "../models/user.model.js";

export const getUsers = async (req, res) => {
  try {
    const loggedInUser = req.user._id;
    const filteredUsers = await User.find({ _id: { $ne: loggedInUser } }).select("-password");
    res.status(200).json({
      success: true,
      data: filteredUsers,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
