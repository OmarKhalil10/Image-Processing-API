import supertest from 'supertest';
import fs from 'fs/promises';
import path from 'path';
import sizeOf from 'image-size';
import app from '../../index';
import { Stats } from 'fs';

const request = supertest(app);

describe('GET /api/images', (): void => {
  it('responds with 400 if called without parameters', async (): Promise<void> => {
    const response = await request.get('/api/images');
    expect(response.status).toBe(400);
  });

  it('responds with 400 if called with a missing parameter', async (): Promise<void> => {
    const response = await request.get('/api/images?filename=test&height=100');
    expect(response.status).toBe(400);
  });

  it('responds with 404 if called successfully and image does not exist', async (): Promise<void> => {
    const response = await request.get(
      '/api/images?filename=test&height=100&width=100'
    );
    expect(response.status).toBe(404);
  });

  it('responds with 200 if called successfully and image exist', async (): Promise<void> => {
    const response = await request.get(
      '/api/images?filename=arch&height=100&width=100'
    );
    expect(response.status).toBe(200);
  });

  it('created a thumbnail version of the photo', async (): Promise<void> => {
    await request
      .get('/api/images?filename=arch&height=100&width=100')
      .then(() => {
        fs.stat(
          path.resolve(
            __dirname,
            '../../../my-images/thumbnail/arch-100x100.jpg'
          )
        ).then((fileStat: Stats) => expect(fileStat).not.toBeNull());
      });
  });

  it('created a thumbnail version of the photo', async (): Promise<void> => {
    await request
      .get('/api/images?filename=arch&height=100&width=150')
      .then(() => {
        const dimensions = sizeOf(
          path.resolve(
            __dirname,
            '../../../my-images/thumbnail/arch-100x150.jpg'
          )
        );
        expect(dimensions.height).toEqual(100);
        expect(dimensions.width).toEqual(150);
      });
  });
});
