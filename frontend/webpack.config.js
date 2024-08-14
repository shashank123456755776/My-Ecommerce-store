const { HotModuleReplacementPlugin } = require('webpack');

module.exports = {
  mode: 'development',
  devServer: {
    watchContentBase: true,
    publicPath: '/dist/',
    hot: true
  },
  plugins: [new HotModuleReplacementPlugin()],
  module: {
    rules: [
      { 
        test: /\.(js|jsx)$/, 
        exclude: /node_modules/, 
        loader: 'babel-loader' 
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  // Add node configuration to ensure process is handled properly
  node: {
    global: true,  // Handle 'global' property
    process: true, // Handle 'process' property
    Buffer: false, // Don't handle 'Buffer' property (if not needed)
    __filename: false, // Don't handle '__filename' property
    __dirname: false,  // Don't handle '__dirname' property
    setImmediate: false // Don't handle 'setImmediate' property
  }
};
