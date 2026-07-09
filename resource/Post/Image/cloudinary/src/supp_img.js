function supprimer_image_cloud(id) {

    if (!id) {
        throw new Error("ID image manquant");
    }

    console.log("Suppression image :", id);

}

module.exports = supprimer_image_cloud;