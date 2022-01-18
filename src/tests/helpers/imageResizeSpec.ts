import path from 'path';
import resizeImage from '../../utilities/imageUtilities';

const fullImagePath = path.resolve(
  __dirname,
  '../../../my-images/all/arch.jpg'
);
const thmbnailImagePath = path.resolve(
  __dirname,
  '../../../my-images/thumbnail/arch.jpg'
);

describe('The image Resizer function', (): void => {
  it('returns a buffer after resizing an image', async () => {
    const imageBuffer: Buffer = await resizeImage({
      height: 100,
      width: 150,
      fullImagePath,
      thmbnailImagePath,
    });
    expect(imageBuffer).toBeInstanceOf(Buffer);
  });

  it('rejects promise if error', async (): Promise<void> => {
    await expectAsync(
      resizeImage({
        height: 100,
        width: 150,
        fullImagePath: '',
        thmbnailImagePath,
      })
    ).toBeRejected();
  });
});