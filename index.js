// const express = require('express')
// const app = express()

// app.use(express.static('public'))

// const courses=
// [
//     {id:1, name:'course1'},
//     {id:2, name:'course2'},
//     {id:3, name:'course3'}

// ]
// app.get('/', (req, res) => {
//   res.send('Hello world!') ;
// });

// app.get('/api/courses', (req, res) => { 
//     res.send(courses);
// });  
// //Port
// app.get('./api/courses/:cId', (req, res) => {
//     const course= courses.find(c=>c.id ===parseInt(req.params.Id));
// if(!course)res.status(404).send(`Course not found`);
//     res.send(course);
// });

// app.post('/api/courses', (req, res) => {
//     const course={id:courses.length+1, name:req.body.name};

// courses.push(course);
//     res.send(course); });


// app.get()








// const port=process.env.PORT = 8080 
// app.listen(8080, () => {
//   console.log(`Listening port ${port}`)
// })
// const http = require('http');
// const port = 3000;
// const hostname = '127.0.0.1';

// const server = http.createServer((req,res)=>{
//     res.statusCode = 200;
//     res.setHeader('Content-Type','text/plain');
//     res.write('Hello from nodejstutor\n');
//     res.end()
//  if(req.url === '/courses'){
//   res.writeHead=200;
//   res.setHeader('Content-Type','text/html');
//      res.write('Hello from nodejstutor\n');
//      res.end()
//  }
//  if(req.url === 'text/course'){ //    
//   res.write('Hello from nodejstutor\n');
//      res.end()
//  }
// });


// server.listen(port,hostname,()=>{
//     console.log(`Serving running at http://${hostname}:${port}/`);
// });


const http = require("http")
const port = 8080
const hostname = "127.0.0.1"

const server = http.createServer((req,res) => {
    if(req.url === '/'){
res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
       res.write("Hello from nodejstutor")
       res.end() 
   }

    if(req.url === '/courses'){
       res.statusCode = 200;
       res.setHeader('Content-Type','text/plain');
       res.write("Welcome to courses")
       res.end()
    }
    if(req.url === '/homework'){
       res.statusCode = 200;
       res.setHeader('Content-Type','text/plain');
       res.write("Hllo there my Name is Titus Kiptoo Kibet")
       res.end() 
    }

});


server.listen(port, hostname, () => {
  console.log(`Serving running at http://${hostname}:${port}/`)
})