const router = require("express").Router();
console.log("ok 4");
const supprimerImage =
require("./cloudinary/src/supp_img");
console.log("ok 5");
router.delete("/:id", async (req, res) => {

    await supprimerImage(req.params.id);

    res.json({
        success: true
    });

});
console.log("IMAGE MODULE LOADED");
module.exports = router;