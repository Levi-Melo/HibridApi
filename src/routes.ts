import { Router } from "express";

import { UserController } from "./controllers/userControllers";
import { AnnotationController } from "./controllers/AnnotationController";

const userController = new UserController();
const annotationController = new AnnotationController();

export const router = Router();

router.get("/users", userController.list);
router.post("/users", userController.create);
router.put("/users", userController.update);
router.delete("/users", userController.delete);

router.get("/annotations", annotationController.list);
router.post("/annotations", annotationController.create);
router.put("/annotations", annotationController.update);
router.delete("/annotations", annotationController.delete);

router.post("/login", userController.auth);
