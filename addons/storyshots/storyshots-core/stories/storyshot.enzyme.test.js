import path from 'path';
import { mount } from 'enzyme';
import { createSerializer as enzymeSerializer } from 'enzyme-to-json';
import { stylesheetSerializer } from 'jest-styled-components';
import initStoryshots from '../src';

initStoryshots({
  framework: 'react',
  configPath: path.join(__dirname, '..', '.storybook'),
  renderer: mount,
  snapshotSerializers: [enzymeSerializer(), stylesheetSerializer],
});
