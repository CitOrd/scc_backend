const mongos = require('mongoose');
const {Schema} =mongos;
const bcrypt = require('bcrypt')

const capturistasSchema = new Schema({
    nombre: {type: String},
    usuario: {type: String},
    contrasenia : {type: String},
    /**preparatoria: {type: Schema.Types.ObjectId, ref:'preparatoria'} */
    
       
})

capturistasSchema.method('compararPassword', function (contrasenia = '') {
    if (bcrypt.compareSync(contrasenia, this.contrasenia)) {
        return true;
    }
    else {
        return false;
    }
});

module.exports = mongos.model('capturistas',capturistasSchema);