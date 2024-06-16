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
export const insertProduct = (data, result) => {
  db.query("INSERT INTO product SET ?", [data], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
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