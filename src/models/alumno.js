const mongos = require('mongoose');
const {Schema} =mongos;

const alumnosSchema = new Schema({
    nombre: {type: String},
    semestre : {type: String},
    matricula: {type: String},
    curp: {type: String}, 
    preparatoria: {type: Schema.Types.ObjectId, ref:'preparatoria'},
    /** De momento solo se pondrá como variable normal entera pero debe de ir  un arreglo de calificaciones*/
    calificaciones: {type: Number}
   
})


module.exports = mongos.model('alumnos',alumnosSchema);