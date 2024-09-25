module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@': './src',
            '@components': './src/components',
            '@entities': './src/entities',
            '@screens': './src/screens',
            '@services': './src/services',
          },
        },
      ],
    ],
  };
};
