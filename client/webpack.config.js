const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const ImageminPlugin = require("imagemin-webpack-plugin").default;
const imageminJpegRecompress = require("imagemin-jpeg-recompress");

const merge = require("webpack-merge");
const parts = require("./webpack.parts");

const port = 3000;

const PATHS = {
  src: path.join(__dirname, "src"),
  dist: path.join(__dirname, "dist")
};

const commonConfig = merge([
  {
    entry: [path.join(PATHS.src, "css/style.css")],
    output: {
      path: PATHS.dist,
      filename: `js/script.[hash].js`
    },
    module: {
      rules: [
        {
          test: /\.html$/,
          loader: `html-loader`
        },
        {
          test: /\.(jpe?g|png|gif|woff2?|webp|svg)$/,
          use: [
            {
              loader: `file-loader`,
              options: {
                limit: 1000,
                context: `./src`,
                name: `[path][name].[ext]`
              }
            },
            {
              loader: `image-webpack-loader`,
              options: {
                bypassOnDebug: true,
                mozjpeg: {
                  progressive: true,
                  quality: 65
                },
                optipng: {
                  enabled: false
                },
                pngquant: {
                  quality: "65-90",
                  speed: 4
                },
                gifsicle: {
                  interlaced: false
                },
                // https://github.com/tcoopman/image-webpack-loader/issues/111
                webp: false
              }
            }
          ]
        },
        {
          test: /\.(js)$/,
          exclude: /node_modules/,
          loader: `babel-loader`
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html"
      })
    ]
  }
]);

const productionConfig = merge([
  parts.extractCSS(),
  {
    plugins: [
      new ImageminPlugin({
        test: /\.(jpe?g)$/i,
        plugins: [imageminJpegRecompress({})]
      })
    ]
  }
]);

const developmentConfig = merge([
  {
    devServer: {
      overlay: true,
      port: port,
      contentBase: PATHS.src
    }
  },
  parts.loadCSS()
]);

module.exports = env => {
  if (process.env.NODE_ENV === "production") {
    console.log("building production");
    return merge(commonConfig, productionConfig);
  }
  return merge(commonConfig, developmentConfig);
};
