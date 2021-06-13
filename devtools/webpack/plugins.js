const {join} = require('path');

const { DefinePlugin, ProvidePlugin } = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const {rootDir, isDev, isDevServer, isProd, mode} = require('./utils/env');

const cleanWebpackPlugin = new CleanWebpackPlugin({
    cleanOnceBeforeBuildPatterns: [
        '**/*',
        '!profile.json',
        '!tsconfig.tsbuildinfo',
    ],
});

const copyPlugin = new CopyPlugin({
    patterns: [{from: join(rootDir, './src/assets'), to: 'assets'}],
});

const definePlugin = new DefinePlugin({
    'process.env': {
        NODE_ENV: JSON.stringify(mode),
    },
    IS_PROD: isProd,
    IS_DEV: isDev,
    IS_DEV_SERVER: isDevServer,
});

const esLintPlugin = new ESLintPlugin({
    context: join(rootDir, '/src'),
    extensions: ['ts', 'tsx'],
});


const forkTsCheckerWebpackPlugin = new ForkTsCheckerWebpackPlugin(
    {
        async: isDev,
        typescript: {
            configFile: join(rootDir, '/tsconfig.json'),
        },
    }
);

const htmlWebpackPlugin = new HtmlWebpackPlugin( {
    filename: 'index.html',
    inject: true,
    template: join(rootDir, './src/index.html'),
});


const miniCssExtractPlugin = new MiniCssExtractPlugin({
    filename: '[name].[contenthash].css',
    chunkFilename: '[id].[contenthash].css',
});

const providePlugin = new ProvidePlugin({});

module.exports = {
    cleanWebpackPlugin,
    copyPlugin,
    definePlugin,
    esLintPlugin,
    forkTsCheckerWebpackPlugin,
    htmlWebpackPlugin,
    miniCssExtractPlugin,
    providePlugin
}