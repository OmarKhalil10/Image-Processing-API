import supertest from 'supertest';
import app from '../../index';

const request = supertest(app);

describe('GET /api/listAllImages', (): void => {
  it('responds with 200', async (): Promise<void> => {
    const response = await request.get('/api/listAllImages');
    expect(response.status).toBe(200);
  });
});
