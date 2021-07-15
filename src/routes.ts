import { Router } from "express";

import { ListUsersController } from "./controllers/userControllers/ListUsersController";
import { CreateUserController } from "./controllers/userControllers/CreateUserController";
import { AuthenticateUserController } from "./controllers/userControllers/AuthenticateUserController";

import { ListAnnotationsController } from "./controllers/annotationControllers/ListAnnotationsController";
import { CreateAnnotationController } from "./controllers/annotationControllers/CreateAnnotationController";

const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();
const authenticateUserController = new AuthenticateUserController();

const createAnnotationController = new CreateAnnotationController();
const listAnnotationsController = new ListAnnotationsController();

export const router = Router();

router.get("/", (req, res) => {
  res.json({ ue: "Ue" });
});
router.get("/annotations", listAnnotationsController.handle);
router.post("/annotations", createAnnotationController.handle);

router.get("/users", listUsersController.handle);
router.post("/users", createUserController.handle);
router.post("/login", authenticateUserController.handle);
