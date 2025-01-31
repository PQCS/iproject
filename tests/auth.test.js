const request = require('supertest');
const app = require('../app');

describe('POST /api/auth/register', () => {
    it('should register a new user', async () => {
        const res = await request(app)
            .post('/api/auth/register')
            .send({
                username: 'testuser',
                email: 'testuser@example.com',
                password: 'password123',
            });
        expect(res.status).toBe(201);
    });
});
