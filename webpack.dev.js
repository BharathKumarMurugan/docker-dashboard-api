const nodeExternals = require('webpack-node-externals');
const path = require("path");

module.exports = {
    mode: 'development',
    entry: {
        app: './src/server.js'
    },
    target: 'node',
    externals: [nodeExternals({ modulesFromFile: true })],
    node: {
        console: false,
        global: false,
        process: false,
        Buffer: false,
        __filename: true,
        __dirname: true
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: [/dist/],
                include: path.resolve(__dirname, 'src'),
                use: { loader: "babel-loader" }
            }
        ]
    }
};