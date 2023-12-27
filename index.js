const express = require('express');
require('dotenv').config();
const cors = require('cors');
const mongoose = require('./config/mongoose');
const bodyParser = require('body-parser');
const surveyRoutes = require('./routes/surveyRoutes');

const app = express();
const port = process.env.PORT || 8000;

// Enable CORS for all routes
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true, 
}));

app.use(bodyParser.json());



app.use("/",require('./routes/index'));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port} 🚀😊`);
});
