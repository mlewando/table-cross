module.exports = function (wallaby) {
    return {
      files: [
        'package.json',
        'src/**/*.mjs',
        { pattern: 'src/**/*.spec.mjs', ignore: true }
      ],
  
      tests: [
        'src/**/*.spec.mjs'
      ],
  
      testFramework: 'mocha',
      trace: true,
      env: {
        type: 'node'
      },
  
      workers: { restart: true }
    };
  };