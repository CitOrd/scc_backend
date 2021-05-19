const {poost} = require('../models')
const {randomNumber} = require('../helpers/libs')

const path = require('path')

const ctrl = {}


ctrl.index = (req,res)=>{
}

ctrl.create = async (req,res)=>{
        const newPoost = new poost({
                title: req.body.title,
                description: req.body.description
                })
        const poostSave = await newPoost.save()
        console.log(newPoost)
        res.send('Esta funcionando')
}

ctrl.like = async (req,res) =>{

}

ctrl.comment = async (req,res) =>{
    
}

ctrl.delete = (req,res) =>{
    
}
module.exports = ctrl