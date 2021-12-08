const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
require('dotenv').config()

const app = express()

console.log('General setup');
app.use(cors())

app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

console.log('Adding routes')
app.get('/login', (req, res) => {
    // Implementation
    res.send('If you see this, express server is working fine :)')
});

console.log('Starting the server')
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`)
});
