const mongoose = require('mongoose');
require('../routes/models/user.model');
module.exports=async()=>{
    //async await
  await mongoose.connect(process.env.DB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(()=>console.log('Connection successfully established')).catch((err)=>console.log(err))  
}


// mongodb+srv://archy:archy123@arcade.te1xd84.mongodb.net/?retryWrites=true&w=majority