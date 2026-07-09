const router = require("express").Router();

const imageRouter = require("./Image");

router.use("/image", imageRouter);

router.post("/create", (req, res) => {

    res.json({
        message: "Publication créée"
    });

});

module.exports = router;