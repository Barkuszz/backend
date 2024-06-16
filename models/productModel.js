//import connection
import db from "../config/database.js";

//get all products
export const getCliente = (result) => {
  db.query("SELECT * FROM CLIENTE", (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

export const getCategoria = (result) => {
  db.query("SELECT DCR_CATEGORIA, COD_CATEGORIA FROM CATEGORIA", (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

export const getCidade = (result) => {
  db.query("SELECT DCR_CIDADE, COD_CIDADE FROM CIDADE", (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

export const getBairro = (result) => {
  db.query("SELECT DCR_BAIRRO, COD_BAIRRO FROM BAIRRO", (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

export const getLocalidade = (result) => {
  db.query("SELECT DCR_LOCALIDADE, COD_LOCALIDADE FROM LOCALIDADE", (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

export const getEmpreendimento = (result) => {
  db.query("SELECT COD_EMPREEDIMENTO, DCR_NOME_FANTASIA FROM EMPREENDIMENTO", (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};


// Função para obter um cliente pelo ID
export const getClienteByID = (id, result) => {
  db.query(
    "SELECT * FROM CLIENTE WHERE COD_CLIENTE = ?",
    [id],
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        // Verifica se encontrou algum resultado
        if (results.length > 0) {
          result(null, results[0]); // Retorna o primeiro resultado encontrado
        } else {
          result({ message: 'Cliente não encontrado' }, null); // Retorna uma mensagem de erro se nenhum cliente for encontrado
        }
      }
    }
  );
};


//insert product to databased
export const insertCliente = (data, result) => {
  const sql = `
    INSERT INTO CLIENTE (
      COD_CLIENTE, NOME_CLIENTE, DCR_ENDERECO, DCR_COMPLEMENTO, NUM_CEP, COD_CIDADE, COD_BAIRRO, COD_LOCALIDADE
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;
  const values = [
    data.COD_CLIENTE,
    data.NOME_CLIENTE,
    data.DCR_ENDERECO,
    data.DCR_COMPLEMENTO,
    data.NUM_CEP,
    data.COD_CIDADE,
    data.COD_BAIRRO,
    data.COD_LOCALIDADE
  ];
  
  db.query(sql, values, (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }

    const ClienteId = data.COD_CLIENTE;
    console.log('Este é o resultado: ', ClienteId);
  });
};

export const insertProduto = (data, result) => {
  const sql = `
    INSERT INTO PRODUTO (
      COD_PRODUTO, DCR_PRODUTO, IMG_PRODUTO, VLR_PRODUTO, FLAG_DISPONIVEL, COD_CATEGORIA, COD_EMPREEDIMENTO) 
      VALUES (?, ?, ?, ?, ?, ?, ?)
  `;
  const values = [
    data.COD_PRODUTO,
    data.DCR_PRODUTO,
    data.IMG_PRODUTO,
    data.VLR_PRODUTO,
    data.FLAG_DISPONIVEL,
    data.COD_CATEGORIA,
    data.COD_EMPREEDIMENTO
  ];
  
  db.query(sql, values, (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
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

export const insertEmpreendimento = (data, result) => {
  const sql = `
    INSERT INTO EMPREENDIMENTO (
      COD_EMPREEDIMENTO, DCR_EMPREENDIMENTO, DCR_NOME_FANTASIA, DCR_ENDERECO, DCR_COMPLEMENTO, NUM_CEP, COD_CIDADE, BAIRRO_COD_BAIRRO, COD_LOCALIDADE, IMG_EMPREENDIMENTO
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;
  const values = [
    data.COD_EMPREEDIMENTO,
    data.DCR_EMPREENDIMENTO,
    data.DCR_NOME_FANTASIA,
    data.DCR_ENDERECO,
    data.DCR_COMPLEMENTO,
    data.NUM_CEP,
    data.COD_CIDADE,
    data.BAIRRO_COD_BAIRRO,
    data.COD_LOCALIDADE,
    data.IMG_EMPREENDIMENTO
  ];

  db.query(sql, values, (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }

    const EmpreendimentoId = data.COD_EMPREEDIMENTO;
    console.log('Este é o resultado: ', EmpreendimentoId);
  });
};

export const insertFuncionario = (data, result) => {
  const sql = `
    INSERT INTO FUNCIONARIO (
      COD_FUNCIONARIO, NOME_FUNCIONARIO, NUM_TELEFONE, DCR_EMAIL
    ) VALUES (?, ?, ?, ?)
  `;
  const values = [
    data.COD_FUNCIONARIO,
    data.NOME_FUNCIONARIO,
    data.NUM_TELEFONE,
    data.DCR_EMAIL
  ];

  db.query(sql, values, (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }

    const FuncionarioId = data.COD_FUNCIONARIO;
    console.log('Este é o resultado: ', FuncionarioId);
  });
};

export const insertEmprendFuncionario = (data, result) => {
  const sql = `
    INSERT INTO EMPREND_FUNCIONARIO (
      COD_EMPREEND_FUNCIONARIO, TIP_FUNCIONARIO, COD_EMPREEDIMENTO, COD_FUNCIONARIO, IMG_EMPREEND_FUNCIONARIO
    ) VALUES (?, ?, ?, ?, ?)
  `;
  const values = [
    data.COD_EMPREEND_FUNCIONARIO,
    data.TIP_FUNCIONARIO,
    data.COD_EMPREEDIMENTO,
    data.COD_FUNCIONARIO,
    data.IMG_EMPREEND_FUNCIONARIO
  ];

  db.query(sql, values, (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }

    const EmprendFuncionarioId = data.COD_EMPREEND_FUNCIONARIO;
    console.log('Este é o resultado: ', EmprendFuncionarioId);
  });
};



// Update Product to Database
export const updateProductById = (data, id, result) => {
  db.query(
    "UPDATE product SET product_name = ?, product_price = ? WHERE product_id = ?",
    [data.product_name, data.product_price, id],
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    }
  );
};

// Delete Product to Database
export const deleteProductById = (id, result) => {
  db.query("DELETE FROM product WHERE product_id = ?", [id], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};