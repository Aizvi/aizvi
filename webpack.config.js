/* eslint-disable */

// Get a `path` module as an object from NodeJS environment.
const path = require('path');
// For MiniCssExtractPlugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// Clean Webpack plugin
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = function () {
    return ({
        entry: {
            'app': './assets/js/app.js',
        },
        output: {
            path: path.resolve(__dirname, '/'), // Absolute path
            filename: '~webpack/js/[name].js',
        },
        module: {
            rules: [
                {
                    // First, run the linter.
                    // It's important to do this before Babel processes the JS.
                    test: /\.js$/,
                    // To be safe, you can use enforce: 'pre' section to check source files,
                    // not modified by other loaders (like babel-loader)
                    enforce: 'pre',
                    exclude: /(node_modules)/,
                    use: {
                        loader: 'babel-loader',
                    }
                },
                // Loads SCSS file compiles into CSS code, and build separate css file
                {
                    test: /\.scss$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                // publicPath, aimed to change urls to resources inside CSS
                                // Change urls in css from `images/slider/slide-1.jpg`
                                // to `../images/slider/slide-1.jpg`
                                publicPath: '../'
                            }
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                url: false,
                            }
                        },
                        {
                            loader: 'sass-loader',
                            // Webpack sass-loader does not recognize global variables file
                            options: {
                             //   sourceMap: true,
                            //    data: '@import "abstract/variables";',
                             //   includePaths: [
                             //       path.join(__dirname, 'src/app')
                            //    ]
                            }
                        }
                    ]
                },

                // file-loader copies file and returns the public url
                {
                    test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2|mp3|mp4)$/i,
                    use: {
                        loader: 'file-loader',
                        options: {
                            publicPath: '/_next/static/',
                            outputPath: 'public/',
                            name: '[name].[ext]',
                        }
                    }
                },
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: '/public/css/[name].css'
            }),
            new CleanWebpackPlugin({
                cleanOnceBeforeBuildPatterns: ['./~webpack/js/**'],
            }),
        ]
    });
};

