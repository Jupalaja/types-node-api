import { Router } from "express";
import { create, remove, list, get, update } from "../controllers/post";

const router = Router();

router.get("/", list);
router.get("/:id", get);
router.post("/", create);
router.put("/:id", update);
router.delete("/:id", remove);

export { router };
