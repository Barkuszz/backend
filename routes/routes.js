//import express
import express from "express";

//import functions from crontroller

import {
    showCliente,
    showProductsById,
    createProduct,
    updateProduct,
    deleteProduct,
  } from "../controllers/product.js";

//init express router
const router=express.Router();

//get all produtcs

router.get("/cliente", showCliente);

//get single product
router.get("/products/:id", showProductsById);

// Create New Product
router.post("/products", createProduct);

// Update Product
router.put("/products/:id", updateProduct);

// Delete Product
router.delete("/products/:id", deleteProduct);

//export default router
export default router;