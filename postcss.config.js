const postcssPresetEnv = require('postcss-preset-env');
const postcssAdvancedVariables = require('postcss-advanced-variables');
const cssnano = require('cssnano');
const postcssImport = require('postcss-import');
const postcssNested = require('postcss-nested');

const plugins = [
  postcssImport(),
  postcssAdvancedVariables(),
  postcssPresetEnv({ browsers: ['last 3 versions', 'Android >= 4.0'] }),
  cssnano(),
  postcssNested({
    preserveEmpty: true,
  })
];

exports = module.exports = {
  plugins
}
exports.plugins = plugins
