#!/usr/bin/env node

var Macros = require('comment-macros');
var fs = require('fs');

function fixture(path) {
  return fs.readFileSync(path, 'utf8');
}

demo1();
demo2();

function demo1() {
  var js = fixture('simple.js');

  var m = new Macros;

  m.use(function(label){
    return 'console.log("' + label + '")';
  });

  m.use(function(label){
    if (0 == label.indexOf('start ')) {
      return 'console.time("' + label + '")';
    }

    if (0 == label.indexOf('end ')) {
      return 'console.timeEnd("' + label + '")';
    }
  });

  var s = m.process(js);

  console.log("demo1 =>\n", s);
}


function demo2(){
  var js = fixture('script.js');

  var m = new Macros;

  m.use(function(label){
    return this.script(function(){
      console.log($0);
      console.timeStart($0)
      stats.incr($0)
    }, label);
  });

  var s = m.process(js);

  console.log("demo2 =>\n", s);
}
