import expresss from "express";
import { verifyToken } from "../utils/verifyUser.js";
import { createComment } from "../controllers/comment.controller.js";

const router = expresss.Router();

router.post('/create', verifyToken, createComment)

export default router;