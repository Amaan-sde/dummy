const express = require('express');
const { getHealthStatus, getLiveness, getReadiness } = require('../controllers/healthController');

const router = express.Router();

router.get('/', getHealthStatus);
router.get('/liveness', getLiveness);
router.get('/readiness', getReadiness);

module.exports = router;
