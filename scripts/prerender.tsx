import React from 'react';
import { renderToString } from 'react-dom/server';
import { readFile, writeFile } from 'node:fs/promises';
import Home from '../client/src/pages/Home';

const output = new URL('../dist/public/index.html', import.meta.url);
const template = await readFile(output, 'utf8');
const content = renderToString(<Home />);
if (!template.includes('<div id="root"></div>')) {
  throw new Error('The static HTML root placeholder was not found.');
}
await writeFile(output, template.replace('<div id="root"></div>', `<div id="root">${content}</div>`));
console.log('Rendered the complete landing page into initial HTML.');
