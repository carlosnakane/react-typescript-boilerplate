module.exports = (api) => {
    const mode = process.env.NODE_ENV ?? 'production';
    api.cache.using(() => mode);
    return {
        presets: [
            [
                '@babel/preset-env',
                {
                    targets: {
                        browsers: ['>1%', 'last 3 versions', 'not ie < 10'],
                    },
                    useBuiltIns: 'usage',
                    debug: false,
                    corejs: 3,
                },
            ],
            '@babel/preset-react',
        ],
        plugins: [
            'babel-plugin-styled-components',
            '@babel/plugin-syntax-dynamic-import',
            '@babel/plugin-proposal-class-properties',
            '@babel/plugin-proposal-export-namespace-from',
            '@babel/plugin-proposal-throw-expressions',
            '@babel/proposal-object-rest-spread',
            mode !== 'production' && 'react-refresh/babel',
        ].filter(Boolean),
    };
};
