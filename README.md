# [gulp](https://github.com/wearefractal/gulp)-dart2js

> Gulp plugin for [dart2js](https://www.dartlang.org/)


## Prerequisites

Requires [dart](https://www.dartlang.org/) to be installed and in your PATH.

- Ubuntu: 
    ```
    sudo add-apt-repository ppa:hachre/dart  &  
    sudo apt-get install dartsdk
    ```
    


## Install

Install with [npm](https://npmjs.org/package/gulp-dart2js)

```
npm install --save-dev gulp-dart2js
```


## Example

```js
var gulp = require('gulp');
var dart = require('gulp-dart2js');

gulp.task('default', function () {
  gulp.src('lib/*.dart')
    .pipe(dart('dist/'))
});
```



### License

```
The MIT License (MIT)  
Copyright (c) 2014 Revath S Kumar

Permission is hereby granted, free of charge, to any person obtaining a copy   
of this software and associated documentation files (the "Software"), to deal   
in the Software without restriction, including without limitation the rights   
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell   
copies of the Software, and to permit persons to whom the Software is furnished   
to do so, subject to the following conditions:  

The above copyright notice and this permission notice shall be included in  
all copies or substantial portions of the Software.  

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR   
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,   
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE   
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER   
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,   
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE   SOFTWARE.
```
