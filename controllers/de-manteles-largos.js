const Equipo = require("../models/el-mejor-equipo");

exports.el_mejor_equipo = (req, res) => {
    const equipoData = new Equipo({
        text: req.body.text,
        image: req.body.image
      });
    
      equipoData
      .save("equipo")
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

exports.el_mejor_equipo_todos = (req, res) => {
      Equipo
      .findOne()
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