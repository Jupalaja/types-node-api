import { Router } from "express";
import { createEntity, deleteEntity, getEntities, getEntity, updateEntity } from "../controllers/entity";

const router = Router();

router.get("/", getEntities);
router.get("/:id", getEntity);
router.post("/", createEntity);
router.put("/:id", updateEntity);
router.delete("/:id", deleteEntity);

export { router };
