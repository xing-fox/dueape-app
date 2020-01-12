const path = require("path")
const CompressionPlugin = require("compression-webpack-plugin")

module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "/dueape/" : "./",
    outputDir: "dist",
    assetsDir: "static",
    lintOnSave: false,
    productionSourceMap: false,
    configureWebpack: config => {
        if (process.env.NODE_ENV === "production") {
            return {
                plugins: [new CompressionPlugin({
                    test: /\.js$|\.html$|\.css/,
                    threshold: 10240,
                    deleteOriginalAssets: false
                })]
            }
        }
    }
}
