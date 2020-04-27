require('dotenv').config();

const express = require('express');
const cors = require('cors');
const serverless = require('serverless-http');

const app = express();
const router = express.Router();

app.use(cors());

router.get('/hello', (req, res) => {
    res.json({
        message: "Hello World!"
    });
});

app.use(process.env.API_BASE_PATH, router);

module.exports.handler = serverless(app);
