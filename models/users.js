module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            no_personal: { type: Number, required: true },
            password: { type: Number, required: true },
            nombre: { type: String, required: true },
            posicion: { type: String, required: true },
            unidad: { type: String, required: true },
            alta: { type: String, required: true },
            division: { type: String, required: true },
            phone: { type: String, required: true },
            photo: { type: String, required: true },
            date: { type: String, required: true },

        }
    )

    
  const createUser = mongoose.model("employs", schema);

  return createUser;
}
