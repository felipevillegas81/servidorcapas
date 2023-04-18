import { Router } from "express";
import {
    getUsers,
    createUser,
    getUserById,
    updateUser,
} from "../controllers/users.controller.js";

const router = Router();

router.get("/", getUsers);
router.post("/", createUser);

router.get("/:id", getUserById);
router.put("/:id", updateUser);

export default router;
