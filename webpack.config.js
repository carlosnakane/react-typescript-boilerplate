const { merge } = require('webpack-merge');

const commonConfig = require('./devtools/webpack/common');
const devConfig = require('./devtools/webpack/dev');
const prodConfig = require('./devtools/webpack/prod');
const { isProd } = require('./devtools/webpack/utils/env');

module.exports = () =>
    isProd ? merge(baseConfig, prodConfig) : merge(commonConfig, devConfig);
