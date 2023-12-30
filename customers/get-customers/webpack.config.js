const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: './src/index.js',
    target: 'node',
    externals: [nodeExternals()],
    output: {
        filename: 'index.js',
        libraryTarget: 'commonjs'
    },
    mode: 'none'
}

// Path: customers/get-customers/src/index.js
// const { getCollectionClient } = require('./clients/mongoClient');
