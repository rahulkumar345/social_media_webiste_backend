const express = require("express");
const postController = require("../controller/postController");
const authenticate = require("../middlewares/authenticate");

const router = express.Router();
router.get("/:id", postController.getPost);
router.get("/allposts", authenticate.protect, postController.getAllPostByUser);
router.post("/", authenticate.protect, postController.createNewPost);
router.delete("/:id", authenticate.protect, postController.deletePost);

router.patch("/like/:id", authenticate.protect, postController.likePost);
router.patch("/unlike/:id", authenticate.protect, postController.unlikePost);
router.patch("/comment/:id", authenticate.protect, postController.addcomment);

module.exports = router;
