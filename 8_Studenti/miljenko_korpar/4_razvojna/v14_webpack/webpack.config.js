const { resolve } = require("dns");
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: "./main.js",
    mode: "production",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "myscripts.js"
    },
    resolve: {
        fallback: {
            fs: false
        },
        alias: {
            handlebars: "handlebars/dist/handlebars.min.js"
        }
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: "node_modules/bootstrap/dist/css/bootstrap.min.css",
                    to: "bootstrap.min.css"
                }
            ]
        })
    ]
}