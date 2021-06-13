const TerserJSPlugin = require('terser-webpack-plugin');

const { cleanWebpackPlugin, miniCssExtractPlugin} = require('./plugins');

module.exports = {
    optimization: {
        minimize: true,
        minimizer: [new TerserJSPlugin({})],
        runtimeChunk: {
            name: 'runtime',
        },
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'initial',
                },
            },
        },
    },
    plugins: [cleanWebpackPlugin, miniCssExtractPlugin],
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    },
};
