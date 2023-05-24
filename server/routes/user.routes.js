import express from "express";

import {
    createUser,
    getAllUsers,
    getUserInfoByID,
    getUserAuth
} from "../controllers/user.controller.js";

const router = express.Router();

router.route("/").get(getAllUsers);
router.route("/").post(createUser);
router.route("/:id").get(getUserInfoByID);
router.route("/auth").post(getUserAuth);

export default router;