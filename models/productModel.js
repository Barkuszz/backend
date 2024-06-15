//import connection
import db from "../config/database.js";

//get all products
export const getCliente = (result) => {
  db.query("SELECT * FROM cliente", (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

//get single product
export const getProductById = (id, result) => {
  db.query(
    "SELECT * FROM PRODUCT WHERE product_id = ?",
    [id],
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results[0]);
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