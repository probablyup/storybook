import path from 'path';
import webpack from 'webpack';

import config from './webpackDllsConfig';

const resolveLocal = dir => path.join(__dirname, dir);
const webpackAsPromised = c =>
  new Promise((res, rej) => {
    webpack(c).run((err, stats) => {
      if (err || stats.hasErrors() || stats.hasWarnings()) {
        rej(stats);
        return;
      }
      res(stats);
    });
  });

const run = () =>
  webpackAsPromised(
    config({
      entry: {
        storybook_ui: [
          '@storybook/addons',
          '@storybook/api',
          '@storybook/components',
          '@storybook/core-events',
          '@storybook/theming',
          'airbnb-js-shims',
          'prop-types',
          'react',
          'react-dom',
          'react-is',
          'regenerator-runtime/runtime',
          'styled-components',
          resolveLocal('../dist/index.js'),
        ],
      },
    })
  );

run().then(
  s => {
    // eslint-disable-next-line no-console
    console.log('success: ', s.toString());
    process.exitCode = 0;
  },
  s => {
    // eslint-disable-next-line no-console
    console.error('failed: ', s.toString());
    process.exitCode = 1;
  }
);
