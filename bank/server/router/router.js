const router = require("express").Router();
const { addUser } = require("../module/user");

router.post("/user", addUser);

module.exports = router;
