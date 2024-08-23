const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const schoolRoutes = require('./src/routes/schoolRoutes');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

const corsOptions = {
    origin: 'https://example.com', 
    methods: 'GET,POST,PUT,DELETE', 
    allowedHeaders: 'Content-Type,Authorization', 
};

app.use(cors(corsOptions));


app.use(bodyParser.json());
app.use('/api', schoolRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
