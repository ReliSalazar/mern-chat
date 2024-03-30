export const signupUser = async (req, res) => {
  try {
    const { fullName, email, password, confirmPassword, gender } = req.body;
  } catch (error) {}
};

export const loginUser = async (req, res) => {
  console.log(req.body);
};

export const logoutUser = async (req, res) => {
  console.log(req.body);
};
