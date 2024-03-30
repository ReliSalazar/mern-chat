import jwt from "jsonwebtoken";

export const generateTokenAndSetCookie = (id, res) => {
  const token = jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });

  res.cookie("jwt", token, {
    // days * hours * minutes * seconds * milliseconds
    maxAge: 15 * 24 * 60 * 60 * 1000,
    httpOnly: true, // to prevent XSS
    sameSite: "strict", // to prevent CSRF
    secure: process.env.NODE_ENV === "production",
  })
}

export default generateTokenAndSetCookie;
