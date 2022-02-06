const path = require('path');
module.exports = {
   entry: "./src/index.ts",
   output: {
       filename: "writerjs.min.js",
       path: path.resolve(__dirname, 'dist')
   },
   resolve: {
       extensions: [".ts", ".js"]
   },
   module: {
       rules: [{ test: /\.ts$/, loader: "ts-loader" }]
   }
}