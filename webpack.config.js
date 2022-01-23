const path = require('path');

module.exports = {
    mode: 'production',
    entry: "./index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].js",
        clean: true,
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }, {
                test: /\.(scss|css)$/,
                use: [
                    "style-loader", //3. Inject styles into DOM
                    "css-loader", //2. Turns css into commonjs
                    "sass-loader" //1. Turns sass into css
                ]
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.xov$/,
                loader: 'file-loader',
                options: {
                    name: 'views/[name].xov',
                },
            }
        ]
    },
};