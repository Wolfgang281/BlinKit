import { Router } from "express";
import {
  loginUser,
  registerUser,
  verifyEmail,
} from "../../controllers/user/user.controller.js";
import { validate } from "../../middlewares/validate.middleware.js";
import {
  loginUserSchema,
  registerUserSchema,
} from "../../validators/user.validator.js";

const router = Router();

router.post("/register", validate(registerUserSchema), registerUser);
router.post("/verify-email", verifyEmail);

router.post("/login", validate(loginUserSchema), loginUser);

export default router;
