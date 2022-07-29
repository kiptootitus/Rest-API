const http = require('http');
const config=require('./config');
const app=require('../app');

const port = process.env.PORT ||	8080;

const server = http.createServer(app);

//routes
// (require('./routes/index'))(app);
config.DB();
server.listen(port,() =>{
    console.log(`Server running at http://localhost:${port}`);
});
