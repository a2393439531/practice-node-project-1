'use strict';

/**
 * practice node.js project
 *
 * @author javasaint
**/

import path from 'path';
import ProjectCore from 'project-core';
import createDebug from 'debug'

const $ = global.$ = new ProjectCore();

$.createDebug = function(name){
  return createDebug('my:' + name)
}

const debug = $.createDebug('server')

$.init.add((done) => {
  $.config.load(path.resolve(__dirname, 'config.js'));
  const env = process.env.NODE_ENV || null;
  if(env){
    debug('load env: %s', env)
    $.config.load(path.resolve(__dirname, '../config', env + '.js'));
  }
  $.env = env
  done();
});

$.init.load(path.resolve(__dirname, 'init', 'mongodb.js'));
$.init.load(path.resolve(__dirname, 'models'));
$.init.load(path.resolve(__dirname, 'init', 'express.js'));
$.init.load(path.resolve(__dirname, 'routes'));

// 初始化

$.init((err) => {
  if(err){
    console.log(err);
    process.exit(-1);
  }else{
    console.log('inited [env=%s]', $.env);
  }

  const item = $.model.User({
    name: 'User',
    password: '123456',
    nickname: '测试用户'
  });

  item.save();
});
