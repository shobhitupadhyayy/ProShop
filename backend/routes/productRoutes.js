const express = require("express");
const { getProducts, getProductById, deleteProduct, updateProduct, createProduct, createProductReview, getTopProducts } = require("../controllers/productController");
const { protect, admin } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").get(getProducts).post(protect, admin, createProduct);
router.route("/top").get(getTopProducts);
router.route("/:id/reviews").post(protect, createProductReview);
router.route("/:id").get(getProductById).delete(protect, admin, deleteProduct).put(protect, admin, updateProduct);


module.exports = router;
