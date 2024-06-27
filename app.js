require('dotenv').config()
require('express-async-errors');

// connection
const connectDB = require('./db/connect');


const express = require('express');
const app = express();

// fileupload
const fileUpload = require('express-fileupload');
const cloudinary = require('cloudinary').v2
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET
})

// routers
const productRouter = require('./routes/products');


// middlewares
app.use(express.json());
app.use(express.static('./public'));
app.use(fileUpload({ useTempFiles: true }));

const notFoundMiddleware = require('./middlewares/notFoundMiddleware');
const errorHandler = require('./middlewares/error-handler');

// routes
app.use('/api/v1/products', productRouter);


app.use(notFoundMiddleware);
app.use(errorHandler);

// port 
const port = process.env.PORT || 3000;


// start function
const start = async() => {
    try {
        await connectDB();
        app.listen(port, () => {
            console.log(`Server is listening on http://localhost:${port}....`)
        })
    } catch (error) {
        console.log("Server Down")
    }
}

start();