import express from "express";
import upload from "../Config/multer";
import { createUser, deleteOneUser, findOneUser, findUsers, signinUser, updateOneUser } from "../Controller/authController";


const router = express.Router();

router.route("/get-User").get(findUsers);
router.route("/register-Users").post(upload, createUser);
router.route("/signin-Users").post(signinUser);
router.route("/:UserID/get-one-User").get(findOneUser);
router.route("/:UserID/update-one-User").patch(updateOneUser);
router.route("/:UserID/delete-one-User").delete(deleteOneUser);

export default router