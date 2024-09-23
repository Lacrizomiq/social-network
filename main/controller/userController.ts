import User from "../model/User.ts";
import { Request, Response } from "express";

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    console.log("Users from DB:", users);
    res.render("home", { users });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: error });
  }
};
