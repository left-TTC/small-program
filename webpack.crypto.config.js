const path = require('path');

module.exports = {
    mode: 'production',
    entry: './node_modules/crypto-js/index.js',
    output: {
        filename: 'crypto-js.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'CryptoJS',
        libraryTarget: 'umd',
    },
};