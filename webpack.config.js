const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        module1: './module1/src/RIndex.tsx',
        module2: './module2/src/RIndex.tsx',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
          {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            use: 'ts-loader',
          },
        ],
    },
    resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './module1/index.html',
            filename: 'module1.html',
            chunks: ['module1'],
        }),
        new HtmlWebpackPlugin({
            template: './module2/index.html',
            filename: 'module2.html',
            chunks: ['module2'],
        }),
    ],
};