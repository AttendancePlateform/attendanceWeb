const uploadHandler = require('../handlers/upload');
const router = require('express').Router();

router.post('/api/upload', uploadHandler.upload);
module.exports = router;

