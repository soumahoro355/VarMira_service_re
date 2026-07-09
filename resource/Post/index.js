const router = require("express").Router();

router.use(
    "/image",
    require("./Image")
);

module.exports = router;