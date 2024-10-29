const path = require('path');

module.exports = {
    mode: 'production',
    entry: './node_modules/ethers/dist/ethers.umd.min.js',
    output: {
        filename: 'ethers.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'ethers',
        libraryTarget: 'umd',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
};