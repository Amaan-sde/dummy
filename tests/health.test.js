const request = require('supertest');
const app = require('../src/app');

describe('Health & System Endpoints', () => {
  describe('GET /', () => {
    it('should return operational status message', async () => {
      const res = await request(app).get('/');
      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty('message');
      expect(res.body).toHaveProperty('version', '1.0.0');
    });
  });

  describe('GET /health', () => {
    it('should return UP status and process health info', async () => {
      const res = await request(app).get('/health');
      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty('status', 'UP');
      expect(res.body).toHaveProperty('timestamp');
      expect(res.body).toHaveProperty('uptime');
    });
  });

  describe('GET /health/liveness', () => {
    it('should return ALIVE status', async () => {
      const res = await request(app).get('/health/liveness');
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual({ status: 'ALIVE' });
    });
  });

  describe('GET /health/readiness', () => {
    it('should return READY status', async () => {
      const res = await request(app).get('/health/readiness');
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual({ status: 'READY' });
    });
  });

  describe('GET /api/v1/users', () => {
    it('should return list of users', async () => {
      const res = await request(app).get('/api/v1/users');
      expect(res.statusCode).toBe(200);
      expect(res.body.success).toBe(true);
      expect(Array.isArray(res.body.data)).toBe(true);
    });

    it('should return 404 for invalid endpoint', async () => {
      const res = await request(app).get('/api/v1/nonexistent');
      expect(res.statusCode).toBe(404);
      expect(res.body).toHaveProperty('message');
    });
  });
});
