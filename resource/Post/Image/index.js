const router = require("express").Router();

const supprimerImage =
require("./cloudinary/src/supp_img");

router.delete("/:id", async (req, res) => {

    await supprimerImage(req.params.id);

    res.json({
        success: true
    });

});

module.exports = router;