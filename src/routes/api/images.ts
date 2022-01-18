import express from 'express';
import fsP from 'fs/promises';
import fs from 'fs';
import resizeImage from '../../utilities/imageUtilities';
import path from 'path';

const images = express.Router();

images.get(
  '/',
  async (req: express.Request, res: express.Response): Promise<void> => {
    const filename = req.query['filename'];
    const height = req.query['height']
      ? parseInt(req.query['height'] as string, 10)
      : null;
    const width = req.query['width']
      ? parseInt(req.query['width'] as string, 10)
      : null;

    // check if the query is correct
    if (!filename || !height || !width) {
      res
        .status(400)
        .send(
          'Please make sure url contains correct filename, height and width params'
        );
      return;
    }

    // get the full path from the filename
    const fullImagePath = `${path.resolve(
      __dirname,
      `../../../my-images/all/${filename}.jpg`
    )}`;

    // thumb path in the ${filename}-${height}x${width} format to save different dimensions
    const thmbnailImagePath = `${path.resolve(
      __dirname,
      `../../../my-images/thumbnail/${filename}-${height}x${width}.jpg`
    )}`;

    // Check if filename exists in full folder
    const fullImage: fs.Stats | null = await fsP
      .stat(fullImagePath)
      .catch(() => {
        res.status(404).send('Image does not exist');
        return null;
      });

    if (!fullImage) {
      return;
    }

    // Check if thumb was already created
    const existingThumb: fs.Stats | null = await fsP
      .stat(thmbnailImagePath)
      .catch(() => {
        return null;
      });

    if (existingThumb) {
      const response:Buffer = await fsP.readFile(thmbnailImagePath);
          res.status(200).contentType('jpg').send(response);
        if (!response)
          res.status(500).send('Error occured processing the image');
    } else {
      // resize image
      const response:Buffer = await resizeImage({
        width,
        height,
        fullImagePath,
        thmbnailImagePath,
      })
          res.status(200).contentType('jpg').send(response);
        if (!response)
          res.status(500).send('Error occured processing the image');
    }
  }
);

export default images;
