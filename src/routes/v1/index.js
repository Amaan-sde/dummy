const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Dummy REST API v1',
    documentation: '/api/v1/docs',
    endpoints: ['/api/v1/health', '/api/v1/users'],
  });
});

module.exports = router;
