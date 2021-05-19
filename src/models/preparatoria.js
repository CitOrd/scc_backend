const mongos = require('mongoose');
const {Schema} =mongos;
const path = require('path')

const preparatoriaSchema = new Schema({
    filename: {type: String},  
    nombre : {type: String},
    clave: {type: String}
    
})

preparatoriaSchema.virtual('uniqueId').get(function(){
    return this.filename.replace(path.extname(this.filename),'')})  



module.exports = mongos.model('preparatoria',preparatoriaSchema);