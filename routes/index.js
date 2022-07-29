const UserController=require('../controllers');

module.exports=(app)=>{
    app.post('/api/v1/register',UserController.register);
};