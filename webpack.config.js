const path = require('path');

const isProduction = typeof NODE_ENV !== 'undefined' && NODE_ENV === 'production';
const mode = isProduction ? 'production' : 'development';
const devtool = isProduction ? false : 'source-map';
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
module.exports =
    {
        entry: './src/app/index.tsx',
        target: 'web',
        mode,
        devtool,
        module: {
            rules: [
                {
                    test: /\.ts(x?)$/,
                    use: [
                        {
                            loader: "ts-loader"
                        }
                    ],
                    exclude: /node_modules/

                },
                {
                    enforce: "pre",
                    test: /\.js$/,
                    loader: "source-map-loader"
                }
            ]
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js']
        },
        output: {
            filename: 'bundle.js',
            path: path.join(__dirname, 'public', 'dist')
        },
        plugins: [
            new BrowserSyncPlugin({
                // browse to http://localhost:3000/ during development,
                // ./public directory is being served
                host: 'localhost',
                port: 3000,
                server: { baseDir: ['public'] }
            })
        ]
    };