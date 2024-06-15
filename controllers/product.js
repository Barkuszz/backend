import{
    getCliente,
    getProductById,
    insertCliente,
    updateProductById,
    deleteProductById,
} from "../models/productModel.js";

export const showCliente=(req,res)=>{
    getCliente((err,results)=> {
        if(err){
            res.send(err);
        }else{
            res.json(results)
        }
    });
};


export const showProductsById=(req,res)=>{
    getProductById(req.params.id, (err, results)=> {
        if(err){
            res.send(err);
        }else{
            res.json(results)
        }
    });
};


export const createProduct = (req,res)=>{
    const data = req.body;
    insertCliente(data,(err,results)=>{
        if(err){
            res.send(err);
        }else{
            res.json(results)
        }
    });
};

export const updateProduct = (req, res) => {
    const data = req.body;
    const id = req.params.id;
    updateProductById(data, id, (err, results) => {
      if (err) {
        res.send(err);
      } else {
        res.json(results);
      }
    });
  };
  
  // Delete Product
  export const deleteProduct = (req, res) => {
    const id = req.params.id;
    deleteProductById(id, (err, results) => {
      if (err) {
        res.send(err);
      } else {
        res.json(results);
      }
    });
  };