const mongos = require('mongoose');
const {Schema} =mongos;

const materiaSchema = new Schema({
    titulo : {type: String},
    semestre: {type: Number},
    clave: {type: String },
    especialidad: {type: String},
    seriacion: {type: [String]}
  
})


module.exports = mongos.model('materias',materiaSchema)