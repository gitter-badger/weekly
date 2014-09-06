#!/usr/bin/env node

'use strict';

var util = require("util");
var events = require("events");
var log = require('util').log;
var assert = require('assert');

function MyStream() {
  // 两种写法都可以
  events.EventEmitter.call(this);
  // this.constructor.super_.call(this);
}

util.inherits(MyStream, events.EventEmitter);

MyStream.prototype.write = function(data) {
  this.emit("data", data);
};

var stream = new MyStream();

log(stream instanceof MyStream); // true
log(stream instanceof events.EventEmitter); // true
log(MyStream.super_ === events.EventEmitter); // true
log(stream.constructor.super_ === events.EventEmitter); // true

stream.on("data", function(data) {
  log('Received data: "' + data + '"');
});

setInterval(function(){
  stream.write("It works!");
},1000);

