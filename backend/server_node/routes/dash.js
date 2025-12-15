const express = require('express');
const router = express.Router();
const { dashboard } = require('../controller/dash');
const verifyToken = require('../middleware/authJwt'); // your JWT middleware

router.get('/header/user', verifyToken, dashboard);

module.exports = router;
