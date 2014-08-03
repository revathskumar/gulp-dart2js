'use strict';
var spawn = require('child_process').spawn;
var map   = require('map-stream');
var gutil = require('gulp-util');
var fs = require('fs');

module.exports = function (out, options) {
  options = options || {};

  var args = ['-o'];

  return map(function(file, cb){
    if(file.isNull()){
      return cb(null, file);
    }

    var fileExtension = options.fileExtension || '.js'
    var filename = gutil.replaceExtension(file.path, fileExtension)
    filename = filename.split('/');
    var destPath = process.cwd() + '/' +  out;
    var dest = destPath + filename[filename.length -1] ;

    if(!fs.existsSync(destPath)){
      fs.mkdir(destPath);
    }

    var cp = spawn('dart2js', [file.path, '-o', dest]);

    cp.stdout.on('data', function(data) {
      console.log('STDOUT : ' + data.toString());
      cb(null, file);
    });

  });
};
