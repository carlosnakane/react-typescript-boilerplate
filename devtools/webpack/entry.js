const { join } = require('path');

const {rootDir} = require('./utils/env');

module.exports =  {
    main: [
        join(rootDir, '/src/index.tsx'),
        join(__dirname, './utils/hmr.js'),
    ],
};
