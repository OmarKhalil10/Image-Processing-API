import express from 'express';
import path from 'path';
import fs from 'fs/promises';

const listAllImages = express.Router();

listAllImages.get(
  '/',
  async (req: express.Request, res: express.Response): Promise<void> => {
    const fullImageFolderPath = `${path.resolve(
      __dirname,
      '../../../my-images/all'
    )}`;
    const files: string[] | null = await fs
      .readdir(fullImageFolderPath)
      .catch(() => {
        res.send('Error no Image');
        return null;
      });
    if (!files) {
      return;
    }

    let HTMLResponse = `
        <h1>All Images</h1>
        <p>All Images that are available</p>
        <ul>
    `;
    files.forEach((file: string): void => {
      HTMLResponse = HTMLResponse + `<li>${file}</li>`;
    });
    res.status(200).send(`${HTMLResponse}</ul>`);
  }
);

export default listAllImages;
