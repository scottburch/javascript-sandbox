// webpack.config.js
module.exports = {
    entry: './src/examples.js',
    output: {
        filename: 'examples.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader' }
        ]
    },
    devtool: "#inline-source-map",
    resolve: {
        alias: {}
    }
};

