import{
    getCliente,
    getProductById,
    insertProduct,
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

export const showCategoria=(req,res)=>{
  getCategoria((err,results)=> {
      if(err){
          res.send(err);
      }else{
          res.json(results)
      }
  });
};

export const showEmpreendimento=(req,res)=>{
  getEmpreendimento((err,results)=> {
      if(err){
          res.send(err);
      }else{
          res.json(results)
      }
  });
};

export const showCidade=(req,res)=>{
  getCidade((err,results)=> {
      if(err){
          res.send(err);
      }else{
          res.json(results)
      }
  });
};

export const showBairro=(req,res)=>{
  getBairro((err,results)=> {
      if(err){
          res.send(err);
      }else{
          res.json(results)
      }
  });
};

export const showLocalidade=(req,res)=>{
  getLocalidade((err,results)=> {
      if(err){
          res.send(err);
      }else{
          res.json(results)
      }
  });
};



export const showClientesById=(req,res)=>{
  getClienteByID(req.params.id, (err, results)=> {
      if(err){
          res.send(err);
      }else{
          res.json(results);
      }
  });
};


export const creatCliente = (req,res)=>{
  const data = req.body;
  insertCliente(data,(err,results)=>{
      if(err){
          res.send(err);
      }else{
          res.json(results)
      }
  });
};

export const createFuncionario = (req,res)=>{
  const data = req.body;
  insertFuncionario(data,(err,results)=>{
      if(err){
          res.send(err);
      }else{
          res.json(results)
      }
  });
};

export const createEmpreendimento = (req,res)=>{
  const data = req.body;
  insertEmpreendimento(data,(err,results)=>{
      if(err){
          res.send(err);
      }else{
          res.json(results)
      }
  });
};

export const createEmpreend_funcionario = (req,res)=>{
  const data = req.body;
  insertEmprendFuncionario(data,(err,results)=>{
      if(err){
          res.send(err);
      }else{
          res.json(results)
      }
  });
};

export const createProduct = (req,res)=>{
    const data = req.body;
    insertProduct(data,(err,results)=>{
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