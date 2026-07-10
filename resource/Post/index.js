const router = require("express").Router();
console.log("ok 2");
router.use("/image",  require("./Image"));
console.log("POST MODULE LOADED");
module.exports = router;