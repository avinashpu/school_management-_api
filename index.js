const express = require('express');
const bodyParser = require('body-parser');
const schoolRoutes = require('./src/routes/schoolRoutes');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api', schoolRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
