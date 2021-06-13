const { join } = require('path');

const mode = process.env.NODE_ENV ?? 'production';
const isDevServer = process.env.DEV_SERVER === 'true';
const isProd = mode === 'production';
const isDev = !isProd;
const rootDir = join(__dirname, '../../../');
const webpackDir = join(__dirname, '../');

module.exports = {
    mode,
    isDevServer,
    isDev,
    rootDir,
    webpackDir,
};
