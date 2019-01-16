const path = require("path");

module.exports = [
    {
        test: /\.js$/,
        use: ["babel-loader"]
    },
    {
        // typescript loader
        test: /\.(tsx|ts)$/,
        use: ["babel-loader", "awesome-typescript-loader"]
    },
    {
        // css loader
        test: /\.css$/,
        use: [
            "style-loader",
            {
                loader: "css-loader",
                options: {
                    modules: true
                }
            }
        ]
    },
    {
        test: /\.module.less$/,
        use: [
            "style-loader",
            "css-loader?modules&localIdentName=less-[name]---[local]---[hash:base64:5]",
            {
                loader: "postcss-loader",
                options: {
                    plugins: function() {
                        return [require("autoprefixer")];
                    }
                }
            },
            "less-loader"
        ]
    },
    {
        test: /^((?!\.module).)*less$/,
        use: [
            "style-loader",
            "css-loader",
            {
                loader: "postcss-loader",
                options: {
                    plugins: function() {
                        return [require("autoprefixer")];
                    }
                }
            },
            "less-loader"
        ]
    },
    {
        test: /\.module.scss$/,
        use: [
            "style-loader",
            "css-loader?modules&localIdentName=scss-[name]---[local]---[hash:base64:5]",
            {
                loader: "postcss-loader",
                options: {
                    plugins: function() {
                        return [require("autoprefixer")];
                    }
                }
            },
            "sass-loader"
        ]
    },
    {
        test: /^((?!\.module).)*scss$/,
        use: [
            "style-loader",
            "css-loader",
            {
                loader: "postcss-loader",
                options: {
                    plugins: function() {
                        return [require("autoprefixer")];
                    }
                }
            },
            "sass-loader"
        ]
    },
    {
        // inline images load (loads the url() defined in the css)
        // help: https://christianalfoni.github.io/react-webpack-cookbook/Inlining-images.html
        test: /\.(png|jpg|gif)$/,
        loader: "url-loader?limit=100000"
    },
    {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader",
        options: {
            limit: 50000,
            mimetype: "application/font-woff",
            publicPath: "/static/"
        }
    },
    {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader",
        options: {
            limit: 50000,
            publicPath: "/static/"
        }
    }
    // Alternative way to load fonts, always as links
    // {
    //   test: /\.(ttf|eot|woff|woff2)$/,
    //   loader: 'file-loader',
    //   options: {
    //     publicPath: '/static/',
    //   },
    // },
    // {
    //     test: /\.svg$/,
    //     loader: "svg-inline-loader"
    // }
];
