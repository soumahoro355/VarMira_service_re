const router = require("express").Router();

router.use(
    "/image",
    require("./image")
);

module.exports = router;