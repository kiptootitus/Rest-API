const {Schema,model}=require('mongoose')


const useSchema=new Schema({
    name: {
        type: String,
        required: true,

    },
    description: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        
    },
})

module.exports =model('User',useSchema)