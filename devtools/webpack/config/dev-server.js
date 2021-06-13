const defaultPort = 8080;

const devServerHost = 'localhost';

const devServerUrl = `http://${devServerHost}:${defaultPort}/`;

const devServerConfig = {
    publicPath: '/',
    port: defaultPort,
    historyApiFallback: true,
    headers: {'Access-Control-Allow-Origin': '*'},
    hot: true,
    overlay: false,
    host: devServerHost,
};

module.exports = {
    devServerUrl,
    devServerConfig
};