const express = require('express');

const controller = require('./controller');
const router = express.Router();

router.get('/cesar', controller.cesarPage);
router.get('/vigenere', controller.vigenerePage);

module.exports = router;