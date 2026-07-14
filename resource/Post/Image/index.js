const router = require("express").Router();
const supprimerImage = require("./cloudinary/src/supp_img");

router.delete("/:id(*)", async (req, res) => {
    try {
        const publicId = decodeURIComponent(req.params.id);
        await supprimerImage(publicId);

        res.json({
            success: true
        });
    } catch (error) {
        console.error("Erreur lors de la suppression de l'image :", error);
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

console.log("IMAGE MODULE LOADED");
module.exports = router;