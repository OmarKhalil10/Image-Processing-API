import express from 'express';
import fs from 'fs';
import path from 'path';
import routes from './routes/index';

const app = express();
const port = 3000;

app.use('/api', routes);

app.get('/', (req: express.Request, res: express.Response): void => {
  res.status(200).send('Server is working!');
});

app.listen(port, (): void => {
  const thumbnailPath = path.resolve(__dirname, '../my-images/thumbnail');

  if (!fs.existsSync(thumbnailPath)) {
    fs.mkdirSync(thumbnailPath);
  }
  console.log(`server started at http://localhost:${port}`);
});

export default app;
