import { Router } from "express";

import { UserController } from "./controllers/userControllers";
import { AnnotationController } from "./controllers/AnnotationController";

const userController = new UserController();
const annotationController = new AnnotationController();

export const router = Router();

router.get("/annotations", userController.list);
router.post("/annotations", userController.create);
router.put("/annotations", userController.update);
router.delete("/annotations", userController.delete);

router.get("/users", annotationController.list);
router.post("/users", annotationController.create);
router.put("/users", annotationController.update);
router.delete("/users", annotationController.delete);

router.post("/login", userController.auth);
