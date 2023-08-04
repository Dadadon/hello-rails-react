const { webpackConfig } = require('@rails/webpacker');

module.exports = {
  ...webpackConfig,
  module: {
    rules: [
      // Add your custom rules here
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      // Add other rules as needed for different file types
    ],
  },
};
