
const Prodeli = require("../models/prodeli");


exports.prodeli = (req, res) => {
    const prodeliData = new Prodeli({
        text: req.body.text,
        title: req.body.title,
        image: req.body.image
      });
    
      prodeliData
      .save("prodeli")
      .then((data) => {
        console.log("resp", data);
        res.status(200).send({
          data: data,
          message: "Información guardada correctamente",
        });
      })
      .catch((err) => {
        console.log("err", err);
        res.status(500).send({
          message:
            "Error al crear." + err.message ||
            "Error al crear.",
        });
      });
}



exports.prodeli_todos = (req, res) => {
    Prodeli
    .find()
    .then((data) => {
      console.log("resp", data);
      res.status(200).send({
        data: data,
        message: "Información regresada correctamente",
      });
    })
    .catch((err) => {
      console.log("err", err);
      res.status(500).send({
        message:
          "Error al consultar." + err.message ||
          "Error al consultar.",
      });
    });
}