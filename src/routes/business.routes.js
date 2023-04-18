import { Router } from "express";
import {
    getBusiness,
    createBusiness,
    getBusinessById,
    addProduct,
} from "../controllers/business.controller";

const router = Router();

router.get("/", getBusiness);
router.post("/", createBusiness);

router.get("/:id", getBusinessById);
router.put("/:id/products", addProduct);

export default router;
