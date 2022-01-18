import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('GET /', (): void => {
  it('responds with 200', async () : Promise<void> => {
   const response = await request.get('/');
   expect(response.status).toBe(200);
  });
});
