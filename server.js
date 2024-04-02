const express = require('express');
const dotenv = require('dotenv');
const logger = require('./middleware/logger');

const bootcamps = require('./routers/bootcamps');

dotenv.config({path: './config/config.env'});

const app = express();

// const logger = (req, res, next) => {
//     req.hello = 'Hello World';
//     console.log('Middleware ran');
//     next();
// };

app.use(logger);

app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.port || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));

