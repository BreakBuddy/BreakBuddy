const express = require('express');
const router = express.Router();

const gameController = require('../controllers/game')

router.post('/', gameController.answer);

router.get('/image', gameController.image);

module.exports = router;