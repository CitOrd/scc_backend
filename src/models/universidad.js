const mongos = require('mongoose');
const {Schema} =mongos;

const universidadSchema = new Schema({
    nombre: {type: String},
    usuario: {type: String},
    contrasenia: {type: String}

})


module.exports = mongos.model('universidad',universidadSchema);