module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'transform-decorators-legacy',
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@pages': './src/pages',
          '@components': './src/shared/components',
          '@routes': './src/shared/routes',
          '@services': './src/shared/services',
          '@assets': './src/shared/assets',
        },
      },
    ],
  ],
};
