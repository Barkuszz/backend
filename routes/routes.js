//import express
import express from "express";

//import functions from crontroller

import {
    showCliente,
    showClientesById,
    creatCliente,
    createProduct,
    updateProduct,
    deleteProduct,
    showCategoria,
    showEmpreendimento,
    showBairro,
    showCidade,
    showLocalidade,
    createEmpreendimento,
    createFuncionario,
    createEmpreend_funcionario,
  } from "../controllers/product.js";

//init express router
const router=express.Router();

//get all produtcs

router.get("/cliente", showCliente);

router.get("/categoria", showCategoria);

router.get("/empreendimento", showEmpreendimento);

router.get("/cidade", showCidade);

router.get("/bairro", showBairro);

router.get("/localidade", showLocalidade);

//get single product
router.get("/cliente/:id", showClientesById);

// Create New Product
router.post("/creatCliente", creatCliente);

// Inserir produto
router.post("/produto", createProduct);

router.post("/createEmpreendimento", createEmpreendimento);

router.post("/createFuncionario", createFuncionario);

router.post("/createEfuncionario", createEmpreend_funcionario);

// Update Product
router.put("/produto/:id", updateProduct);

// Delete Product
router.delete("/produto/:id", deleteProduct);

//export default router
export default router;