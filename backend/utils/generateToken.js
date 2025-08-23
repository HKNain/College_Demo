import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId,role, res) => {
  const token = jwt.sign({ userId,role }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });

  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000,
    httpOnly: false,
    secure: false,
    sameSite: "Strict",
  });
};

export default generateTokenAndSetCookie;