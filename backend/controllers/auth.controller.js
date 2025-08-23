import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
  try {
    const {
      email, 
      password, 
      role,
      securityKey
    } = req.body;
    

    if (
      !email ||
      !password ||
      password.length < 6 
    ) {
      console.log(email, password, role);
      return res
        .status(400)
        .json({ error: "Please enter input values correctly" });
    }

    const user = await User.findOne({ email });

    if (user) {
      return res
      .status(400)
      .json({ error: "email already exists" });
    }

    if (role === "Admin") {
      if (securityKey !== process.env.ADMIN_SECURITY_KEY) {
        return res
        .status(400)
        .json({ error: "Wrogn Security Key" });
      }
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log ( " hello world ")

    const newUser = new User({
      email,
      password: hashedPassword,
      role,
    });

    if (newUser) {
      generateTokenAndSetCookie(newUser._id, res);

      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        email: newUser.email,
      });
    } else {
      res
      .status(400)
      .json({ error: "Invalid User Data" });
    }
  } catch (error) {
    console.log("Error in SignUp Controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password, role, securityKey } = req.body;
    const user = await User.findOne({ email });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    );

    if (!user || !isPasswordCorrect) {
      return res
      .status(400)
      .json({ error: "Invalid Credentials" });
    }

    if (role === "admin") {
      if (securityKey !== process.env.ADMIN_SECURITY_KEY) {
        return res.status(400).json({ error: " Wrong Security Key" });
      }
    }

    if (user.role !== role) {
      return res
        .status(400)
        .json({ error: `You are not authorised for this ${role}` });
    }

    generateTokenAndSetCookie(user._id, res);

    res.status(200).json({
      _id: user._id,
      email: user.email,
    });
  } catch (error) {
    console.log("Error in Login Controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const logout = async (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged Out Successfully" });
  } catch (error) {
    console.log("Error in Logout Controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
