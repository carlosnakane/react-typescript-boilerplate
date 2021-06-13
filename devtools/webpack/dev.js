const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const { devServerConfig } = require('./config/dev-server');

module.exports =  {
    devtool: 'cheap-module-source-map',
    plugins: [new ReactRefreshWebpackPlugin()],
    devServer: devServerConfig,
};
