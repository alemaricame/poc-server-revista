const Equipo = require("../models/el-mejor-equipo");
const Excelencia = require("../models/excelencia");


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



exports.excelencia = (req, res) => {
  const excelenciaData = new Excelencia({
      text: req.body.text,
      image: req.body.image,
      nombre: req.body.nombre,
    });
  
    excelenciaData
    .save("excelencia")
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

exports.excelencia_todos = (req, res) => {
  Excelencia
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