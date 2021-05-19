const mongoose = require('mongoose')
const {Schema} =  mongoose
const path = require('path')


const PoostSchema = new Schema({
    title: {type: String},
    description:{type: String, required: true},
    date: {type: Date, default: Date.now},
    views: {type: Number, default: 0},
    likes:{type: Number, default: 0}
})

PoostSchema.virtual('uniqueId')
    .get(function(){
        return this.title
    })

module.exports = mongoose.model('poost', PoostSchema)