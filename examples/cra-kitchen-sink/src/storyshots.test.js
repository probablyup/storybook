import path from 'path';
import { render as renderer } from 'enzyme';
import { createSerializer as enzymeSerializer } from 'enzyme-to-json';
import { stylesheetSerializer } from 'jest-styled-components';

import initStoryshots, { multiSnapshotWithOptions } from '@storybook/addon-storyshots';

initStoryshots({
  framework: 'react',
  configPath: path.join(__dirname, '..', '.storybook'),
  integrityOptions: { cwd: path.join(__dirname, 'stories') },
  test: multiSnapshotWithOptions({
    renderer,
  }),
  snapshotSerializers: [enzymeSerializer(), stylesheetSerializer],
});
