const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
    entry: './src/stories.js',
    watch: true,
    output: {
        filename: 'stories.js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test:/\.(s*)css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'resolve-url-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.(ttf)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/i,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      limit: 8192,
                    }
                  },
                ],
               type: 'javascript/auto'
              },
        ]
    },
    plugins: [
        // new CleanWebpackPlugin(), 
        new MiniCssExtractPlugin({
           filename: 'stories.css',
        }),
    ]
};
