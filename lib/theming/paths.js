const { dirname } = require('path');
const resolveFrom = require('resolve-from');

const resolve = resolveFrom.bind(null, __dirname);

// These paths need to be aliased in the manager webpack config to ensure that all
// code running inside the manager uses the *same* versions of each package.
module.exports = {
  'styled-components': dirname(resolve('styled-components/package.json')),
};
