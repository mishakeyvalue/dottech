var Webpack = require('webpack');
var Path = require('path');

module.exports = {
    entry: "./webpack-build/build.js",
    output: {
        path: Path.join(__dirname, '/public/build'),
        filename: "bundle.js"
    }
};