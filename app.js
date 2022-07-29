const express = require('express');
const app = express();
const morgan = require('morgan');
const productRoutes=require('./posts/routes/products');	
const orderRoutes=require('./posts/routes/orders');

//
const bodyParser = require('body-parser');

app.use(morgan('dev')); 
app.use(bodyParser.urlencoded({ extended: false }));
//convert body to JSON format
app.use(bodyParser.json());
//express json format
app.use(express.json());


//handle routes
// app.use('/products',productRoutes);
// app.use('/orders',orderRoutes);
(require('./Rest-API/routes/index'))(app);

//error handling 
app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

// mongodb+srv://<username>:<password>@cluster0.je0rm.mongodb.net/?retryWrites=true&w=majority
module.exports = app;