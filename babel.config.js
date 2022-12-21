const {getDefaultConfig} = require('metro-config');

module.exports = api => {
  api.cache(true);

  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      ['@babel/plugin-proposal-decorators', {legacy: true}],
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          alias: {
            locale: './locale',
            pages:"./src/component/pages",
            src: "./src",
          },
        },
      ],
    ],
  };
};
