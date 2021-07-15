import { Router } from "express";

import { AuthenticateUserController } from "./controllers/userControllers/AuthenticateUserController";
import { CreateUserController } from "./controllers/userControllers/CreateUserController";
import { ListUsersController } from "./controllers/userControllers/ListUsersController";
import { UpdateUserController } from "./controllers/userControllers/UpdateUserController";
import { DeleteUserController } from "./controllers/userControllers/DeleteUserController";

import { ListAnnotationsController } from "./controllers/annotationControllers/ListAnnotationsController";
import { CreateAnnotationController } from "./controllers/annotationControllers/CreateAnnotationController";
import { UpdateAnnotationController } from "./controllers/annotationControllers/UpdateAnnotationController";
import { DeleteAnnotationController } from "./controllers/annotationControllers/DeleteAnnotationController";

const authenticateUserController = new AuthenticateUserController();
const listUsersController = new ListUsersController();
const createUserController = new CreateUserController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();

const listAnnotationsController = new ListAnnotationsController();
const createAnnotationController = new CreateAnnotationController();
const updateAnnotationController = new UpdateAnnotationController();
const deleteAnnotationController = new DeleteAnnotationController();

export const router = Router();

router.get("/annotations", listAnnotationsController.handle);
router.post("/annotations", createAnnotationController.handle);
router.put("/annotations", updateAnnotationController.handle);
router.delete("/annotations", deleteAnnotationController.handle);

router.get("/users", listUsersController.handle);
router.post("/users", createUserController.handle);
router.patch("/users", updateUserController.handle);
router.delete("/users", deleteUserController.handle);

router.post("/login", authenticateUserController.handle);
