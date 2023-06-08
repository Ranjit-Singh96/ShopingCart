const connection = require("../database/db");

const FetchProduct = async (req, res) => {
  connection.query("select * from productlist", (err, result) => {
    if (err) {
      console.log("Error: ", err);
    } else {
      res.json({ result });
    }
  });
};

const FetchProductById = async (req, res) => {
  const id = [req.params.id];
  connection.query(
    "select * from productlist where product_id=?",
    id,
    (err, result) => {
      if (err) {
        console.log("Error: ", err);
      } else {
        res.status(200).json({ result });
      }
    }
  );
};

const IncreaseQuantityById = async (req, res) => {
  const id = [req.params.id];
  connection.query(
    "update cartproduct set quantity=quantity+1 where product_id=?",
    id,
    (err, result) => {
      if (err) {
        console.log("Error: ", err);
      } else {
        res.status(200).json({ result });
      }
    }
  );
};

const DecreaseQuantityById = async (req, res) => {
  const id = [req.params.id];
  connection.query(
    "update cartproduct set quantity=quantity-1 where product_id=?",
    id,
    (err, result) => {
      if (err) {
        console.log("Error: ", err);
      } else {
        res.status(200).json({ result });
      }
    }
  );
};

const FetchCartProductById = async (req, res) => {
  const id = [req.params.id];
  connection.query(
    "select quantity from cartproduct where product_id=?",
    id,
    (err, result) => {
      if (err) {
        console.log("Error: ", err);
      } else {
        res.status(200).json({ result });
      }
    }
  );
};

const AddDataCart = async (req, res) => {
  const data = req.body;
  connection.query("Insert into cartProduct set ?", data, (err, result) => {
    if (err) {
      res.json({
        status: "false",
        message: "Data not added",
      });
      // console.log("error:" + err);
    } else {
      res.json({
        status: "true",
        message: "Data added successfully",
        Data: result,
      });
    }
  });
};

const FetchCartById = async (req, res) => {
  const id = [req.params.id];
  connection.query(
    "select * from cartproduct where product_id=?",
    id,
    (err, result) => {
      if (err) {
        console.log("Error: ", err);
      } else {
        // console.log(result);
        if (result.length > 0) {
          res.json({
            status: "true",
            message: "Data found successfully",
            Data: result,
          });
        } else {
          res.json({
            status: "false",
            message: "Data not found",
          });
        }
      }
    }
  );
};

const FetchCartProduct = async (req, res) => {
  connection.query("select * from cartproduct", (err, result) => {
    if (err) {
      console.log("Error: ", err);
    } else {
      res.json({ result });
    }
  });
};

const FetchProductByCategory = async (req, res) => {
  const category = ["%"+req.params.category+"%"];
  connection.query(
    "select * from productlist where category like ?",
    category,
    (err, result) => {
      if (err) {
        console.log("Error: ", err);
      } else {
        res.status(200).json({ result });
      }
    }
  );
};

const RemoveCartProduct = async (req, res) => {
  const id = [req.params.id];
  connection.query("Delete from cartproduct where product_id=?",id, (err, result) => {
    if (err) {
      res.json({
        status: false,
        message: "Some error occured",
        Data: [],
      });
    } else {
      res.json({ result });
    }
  });
};

module.exports = {
  FetchProduct,
  FetchProductById,
  AddDataCart,
  FetchCartById,
  FetchCartProductById,
  FetchCartProduct,
  FetchProductByCategory,
  IncreaseQuantityById,
  DecreaseQuantityById,
  RemoveCartProduct
};
