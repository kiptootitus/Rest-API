const mongoose=require('mongoose');

module.exports=async(req,res)=>{
    //req
if(Object.keys(req.body).length <1)
{
   return  res.status(400).json({
        key:'data',
        message:'Please provide data'
    });
}
//destructing
const {name, email, description}=req.body;

if(!name){
    return res.status(400).json({
        key:'name',
        message:'Please provide name'
    });
}
if(!email){
    return res.status(400).json({
        key:'email',
        message:'Please provide email'
    });
}
if(!description){
    return res.status(400).json({
        key:'description',
        message:'Please provide description'
    });
}
//create a new user
const user=await mongoose.model('User').findOne({email:email});
if(user){
    return res.status(400).json({
        key:'email',
        message:'User already exists'
    });
}
const newUser=await mongoose.model('User').create({name:name,email:email,description:description});
return res.status(200).json({
    message:'User created successfully',
    user:newUser
});

}