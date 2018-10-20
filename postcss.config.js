/* eslint-disable */

module.exports = {
  plugins: [
    require('postcss-preset-env')({
      autoprefixer: {
        browsers: ['> 2%', 'last 2 versions'],
      },
    }),
    require('cssnano'),
  ],
};
