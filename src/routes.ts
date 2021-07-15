import { Router } from "express";

import { UserController } from "./controllers/userControllers";
import { AnnotationController } from "./controllers/AnnotationController";
import { ensureAuthenticated } from "./service/ensureAuthenticated";

const userController = new UserController();
const annotationController = new AnnotationController();

export const router = Router();

router.get("/users", ensureAuthenticated, userController.list);
router.post("/users", userController.create);
router.put("/users", ensureAuthenticated, userController.update);
router.delete("/users", ensureAuthenticated, userController.delete);

router.get("/annotations", ensureAuthenticated, annotationController.list);
router.post("/annotations", ensureAuthenticated, annotationController.create);
router.put("/annotations", ensureAuthenticated, annotationController.update);
router.delete("/annotations", ensureAuthenticated, annotationController.delete);

router.post("/login", userController.auth);
