const {join} = require('path');

const { rootDir } = require('../utils/env');

const aliasItems = {
    '~src': join(rootDir, '/src'),
    '~images': join(rootDir, '/src/images'),
    '~components': join(rootDir, '/src/components'),
};

module.exports = { 
    aliasItems,
}