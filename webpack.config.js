var path = require("path");

module.exports = {
    entry: {
      'require-test': './src/require-test.js',
      'require-ensure-test': './src/require-ensure-test.js'
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].js",
        chunkFilename: "js/[name].js"
    },
    plugins: [
    ],
    recordsOutputPath: path.join(__dirname, "dist", "records.json")
};