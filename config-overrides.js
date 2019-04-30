module.exports = function override(config, env) {
  (config.module = {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules\/(?!(formol)\/).*/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-react',
              [
                '@babel/preset-env',
                {
                  targets: { browsers: 'last 1 version and > 3%' },
                  modules: false
                }
              ]
            ],
            plugins: [
              '@babel/plugin-syntax-dynamic-import',
              ['@babel/plugin-proposal-decorators', { legacy: true }],
              'add-react-static-displayname',
              ['@babel/plugin-proposal-class-properties', { loose: true }]
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }),
    (config.resolve = {
      extensions: ['.mjs', '.js', '.jsx']
    });
  return config;
};
