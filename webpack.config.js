const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, 'dist'),
       
    },
    devServer: {
        static: './dist',
    },
    optimization: {
        runtimeChunk: 'single',
    },
};