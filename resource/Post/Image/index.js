const router = require("express").Router();

const supprimer = require("./cloudinary/src/supp_img");

router.delete("/:id", (req, res) => {

supprimer(req.params.id);

    res.json({
        message: "Image supprimée"
    });

});

module.exports = router;