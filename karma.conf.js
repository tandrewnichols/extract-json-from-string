// Karma configuration
// Generated on Fri Oct 23 2015 14:00:27 GMT-0400 (EDT)

module.exports = function(config) {
  config.set({
    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha'],
    reporters: ['mocha'],
    browsers: ['Chrome', 'Firefox', 'PhantomJS'],
    preprocessors: {
      
      'test/**/*.js': ['webpack']
      
    },


    // list of files / patterns to load in the browser
    files: [
      
      'test/**/*.js'
    ],

    
    webpack: {
      module: {
        loaders: [
          {
            test: /lib.*\.js$/,
            loader: ['babel'],
            exclude: /node_modules/,
            query: {
              presets: ['es2015']
            }
          }
        ]
      }
    },
    

    logLevel: config.LOG_WARN
  });
}
