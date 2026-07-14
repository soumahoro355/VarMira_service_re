const router = require("express").Router();
const supprimerImage = require("./cloudinary/src/supp_img");

router.delete("*", async (req, res) => {
    try {
        const rawId = req.params[0] || req.path || "";
        const publicId = decodeURIComponent(rawId.replace(/^\/+/, ""));

        if (!publicId) {
            return res.status(400).json({
                success: false,
                error: "Missing Cloudinary public ID."
            });
        }

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