const getHealthStatus = (req, res) => {
  const healthData = {
    status: 'UP',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    memoryUsage: process.memoryUsage(),
    environment: process.env.NODE_ENV || 'development',
  };

  res.status(200).json(healthData);
};

const getLiveness = (req, res) => {
  res.status(200).json({ status: 'ALIVE' });
};

const getReadiness = (req, res) => {
  res.status(200).json({ status: 'READY' });
};

module.exports = {
  getHealthStatus,
  getLiveness,
  getReadiness,
};
