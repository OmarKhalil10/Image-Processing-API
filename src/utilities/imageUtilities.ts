import fs from 'fs/promises';
import sharp from 'sharp';

interface ResizeImageProperties {
  width: number;
  height: number;
  fullImagePath: string;
  thmbnailImagePath: string;
}

const resizeImage = async ({
  width,
  height,
  fullImagePath,
  thmbnailImagePath,
}: ResizeImageProperties): Promise<Buffer> => {
  const data: Buffer | null = await fs
    .readFile(fullImagePath)
    .catch(() => null);

  if (!data) {
    return Promise.reject();
  }
  const imageBuffer: Buffer | null = await sharp(data)
    .resize(width, height)
    .toBuffer()
    .catch(() => null);
  if (!imageBuffer) {
    return Promise.reject();
  }
  return fs
    .writeFile(thmbnailImagePath, imageBuffer)
    .then(() => {
      return imageBuffer;
    })
    .catch(() => {
      return Promise.reject();
    });
};

export default resizeImage;
