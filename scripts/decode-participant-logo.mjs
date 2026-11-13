import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { resolve, dirname } from 'node:path';

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const imagePath = resolve(projectRoot, 'client/public/assets/leading-with-kindness-participants.webp');
const content = readFileSync(imagePath);
if (content.subarray(0, 4).toString('ascii') === 'RIFF' && content.subarray(8, 12).toString('ascii') === 'WEBP') {
  console.log('Participant logo image is already a valid WebP.');
} else {
  const encoded = content.toString('utf8').trim();
  if (!/^[A-Za-z0-9+/=\s]+$/.test(encoded)) throw new Error('Participant logo asset is not valid base64.');
  const image = Buffer.from(encoded, 'base64');
  if (image.subarray(0, 4).toString('ascii') !== 'RIFF' || image.subarray(8, 12).toString('ascii') !== 'WEBP') {
    throw new Error('Decoded participant logo asset is not a WebP image.');
  }
  writeFileSync(imagePath, image);
  console.log('Decoded participant logo asset for Vercel build.');
}
