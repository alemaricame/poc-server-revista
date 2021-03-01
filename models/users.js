module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            numero_personal: { type: String, required: true },
            empleado: { type: String, required: true },
            posicion: { type: String, required: true },
            unidad: { type: String, required: true },
            fecha_alta: { type: String, required: true },
            division: { type: String, required: true },
            tel: { type: String, required: true },
            distrito: { type: String, required: true },
            asesor: { type: String, required: true },
        }
    )

    
  const createUser = mongoose.model("users", schema);

  return createUser;
}
