const path = require('path');

const { aliasItems } = require('./config/alias');
const { devServerUrl } = require('./config/dev-server');
const entry = require('./entry');
const plugins = require('./plugins');
const { isDevServer, isProd, rootDir } = require('./utils/env');

module.exports = {
    context: __dirname,
    target: isDevServer ? 'web' : ['web', 'es5'],
    mode: isProd ? 'production' : 'development',
    entry,
    output: {
        path: path.join(rootDir, 'dist'),
        publicPath: isDevServer ? devServerUrl : './',
        filename: isDevServer
            ? '[name].[fullhash].js'
            : '[name].[contenthash].js',
    },
    module: {
        rules: [
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                issuer: /\.[jt]sx$/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                    {
                        loader: '@svgr/webpack',
                        options: {
                            babel: false,
                            icon: true,
                        },
                    },
                ],
            },
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                },
                exclude: /node_modules/,
            },
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                },
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|)$/,
                type: 'asset/inline',
            }
        ],
    },
    plugins: [
        plugins.htmlWebpackPlugin,
        plugins.providePlugin,
        plugins.definePlugin,
        plugins.forkTsCheckerWebpackPlugin,
        plugins.esLintPlugin,
        plugins.copyPlugin,
    ],
    resolve: {
        alias: aliasItems,
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
    }
};

