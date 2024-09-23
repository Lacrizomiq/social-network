import { Router } from "express";
import { getAllUsers } from "../controller/userController.ts";

const router = Router();

router.get("/", getAllUsers);

export default router;
