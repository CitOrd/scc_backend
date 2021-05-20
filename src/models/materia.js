const mongos = require('mongoose');
const {Schema} =mongos;

const materiaSchema = new Schema({
    titulo : {type: String},
    clave: {type: String },
    semestre: {type: String},
    seriacion: {type: String},
    matSeriada: {type: String}    
})


module.exports = mongos.model('materias',materiaSchema)