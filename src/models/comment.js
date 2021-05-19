const {Schema, model} =  require('mongoose')
const { ObjectId } = Schema.ObjectId

const CommentSchema = new Schema({

   
    nombre:{type: String},
    comment:{type: String},
    timestamp:{type: Date, default: Date}

})


module.exports = model('Comment', CommentSchema)