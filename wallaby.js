module.exports = function (wallaby) {
    return {
      files: [
        'src/**/*.mjs'
      ],
  
      tests: [
        'src/**/*.spec.mjs'
      ],
  
      testFramework: 'mocha',
      trace: true
    };
  };