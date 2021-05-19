const mongos = require('mongoose');
const {Schema} =mongos;

const planEstudioSchema = new Schema({
    titulo : {type:String, required: true},
    preparatoria: {type: Schema.Types.ObjectId, ref:'preparatoria'},
    materias: {type: [Schema.Types.ObjectId, ref= 'materia']}
})


module.exports = mongos.model('planesEstudio',planEstudioSchema);