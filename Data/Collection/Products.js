const mongoose=require('mongoose')
const Schema=mongoose.Schema

const Products = new Schema({
    title:{
        type:String,
        require:true,
        default:''
    },
    price:{
        type:Number,
        require:true,
        default : 0
    },
    image:{
        type: String,
        default:''
    },
    colors:{
        type:Array,
        default:[],
    },
    size:[{
        type:String,
        enum:['1200x600x145','1000x600x145']
    }],
    description:{
        type:String,
        default:'',
    }

})
module.exports = mongoose.model('Products',Products);
