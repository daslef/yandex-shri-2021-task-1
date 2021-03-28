const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    mode: 'production',
    entry: './src/stories.js',
    watch: true,
    output: {
        filename: 'stories.js',
        path: path.resolve(__dirname, 'build')
    },
    optimization: {
        minimize: false
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            },
            {
                test:/\.(s*)css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'resolve-url-loader',
                    {
                        loader: "postcss-loader",
                        options: {
                          postcssOptions: {
                            plugins: [
                              [
                                "postcss-preset-env",
                                { browsers: 'last 2 versions' },
                                "autoprefixer",
                              ],
                            ],
                          },
                        },
                    },
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
        new MiniCssExtractPlugin({
           filename: 'stories.css',
        }),
    ]
};
