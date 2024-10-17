const path = require("path");
const fs = require("fs");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const CircularDependencyPlugin = require("circular-dependency-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "[name]/[name].js"
    },
    resolve: {
        extensions: [".js"],
    },
    stats: {
        warnings: false
    },
    module: {
        rules: [

        ]
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [ { from: "**/*.html", context: "src/" } ]
        }),
        new CircularDependencyPlugin({
            exclude: /node_modules/,
            failOnError: true,
        }),
    ]
};
