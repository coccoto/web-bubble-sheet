const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

const DEVELOP_URL = 'http://localhost:10830/'
const PRODUCT_URL = 'https://webbubblesheet.coccoto.com/'

const SOURCE = path.resolve(__dirname, 'src')
const OUTPUT = path.resolve(__dirname, 'dist')

module.exports = (env, argv) => {

    const IS_DEVELOPMENT = argv.mode === 'development'
    const ASSET_PATH = IS_DEVELOPMENT ? '/' : PRODUCT_URL

    return {
        entry: {
            index: path.resolve(SOURCE, 'index.tsx'),
        },
        output: {
            path: path.resolve(OUTPUT),
            publicPath: ASSET_PATH,
            filename: 'index.js',
        },
        devtool: IS_DEVELOPMENT ? 'inline-source-map' : IS_DEVELOPMENT,
        resolve: {
            extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
            modules: [
                path.resolve(__dirname, 'node_modules')
            ],
            alias: {
                '@': path.resolve(SOURCE),
            },
        },
        devServer: {
            open: true,
            static: {
                directory: OUTPUT,
                watch: true
            },
            historyApiFallback: true,
        },
        module: {
            rules: RULES
        },
        plugins: [
            new htmlWebpackPlugin({
                template: path.resolve(SOURCE, 'index.html'),
                minify: IS_DEVELOPMENT ? false : true
            }),
        ],
    }
}

const RULES = [
    {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
    },{
        test: /\.(sass)$/,
        exclude: /\.(module)\.(sass)$/,
        use: [
            'style-loader', 'css-loader', {
                loader: 'postcss-loader',
                options: {
                    postcssOptions: {
                        plugins: [
                            require('autoprefixer')
                        ]
                    }
                },
            },{
                loader: 'sass-loader',
                options: {
                    sassOptions: {
                        includePaths: [path.resolve(SOURCE, 'styles')],
                    }
                }
            }
        ]
    },{
        test: /\.(module)\.(sass)$/,
        use: [
            'style-loader', {
                loader: 'css-loader',
                options: {
                    modules: true,
                    esModule: false,
                }
            },{
                loader: 'postcss-loader',
                options: {
                    postcssOptions: {
                        plugins: [
                            require('autoprefixer')
                        ]
                    }
                },
            },{
                loader: 'sass-loader',
                options: {
                    sassOptions: {
                        includePaths: [path.resolve(SOURCE, 'styles')],
                    }
                }
            }
        ]
    },{
        test: /\.(html)$/,
        loader: 'html-loader'
    }
]