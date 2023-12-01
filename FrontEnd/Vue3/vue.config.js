// const cors = require('cors');

// module.exports = {
//     devServer: {
//         proxy: `http://localhost:3000`,
//     },
//   }
// app.use(cors({
//     origin: `http://localhost:3000`,
// }));
module.exports = {
    configureWebpack: {
      plugins: [
        new ImageminPlugin({
          test: /\.(jpe?g|png|gif|svg)$/i,
          optipng: { optimizationLevel: 7 },
          gifsicle: { optimizationLevel: 3 },
          svgo: {
            plugins: [
              { removeViewBox: false },
              { removeEmptyAttrs: false },
            ],
          },
        }),
      ],
    },
  };