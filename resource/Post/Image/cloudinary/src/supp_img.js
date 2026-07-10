const path = require("path");
const cloudinary = require("cloudinary").v2;
require("dotenv").config({ path: path.resolve(__dirname, "../../../../../config/.env") });

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

async function supprimerImage(id) {
  if (!id) {
    throw new Error("Missing Cloudinary public ID for deletion.");
  }

  console.log("Suppression :", id);
  const result = await cloudinary.uploader.destroy(id, {
    resource_type: "image",
    invalidate: true,
  });

  console.log("Cloudinary suppression result:", result);
  return result;
}

module.exports = supprimerImage;