import supertest from 'supertest';
import app from '../../index';

const request = supertest(app);

describe('GET /api/listAllImages', () => {
  it('responds with 200', async () => {
    const response = await request.get('/api/listAllImages');
    expect(response.status).toBe(200);
  });
});
